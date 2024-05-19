
import { uploadImages } from "../services/uploadImage.js";
import { Create,GetAll,Delete } from "../repository/Proyect.repository.js";
import { successResponseWithData } from "../helpers/http/responses.js";

export const CreateProyect = async(req,res,next)=>{
    // obtener body 
    const {title,sub_title,repository_url,demo_url,description,tecnologies,learning_gained,difficulties,end_date} = req.body
    // Obtener las imagenes
    const imagesBuffer = req.files;

    try {
        // subir imagenes
        const images = await uploadImages(imagesBuffer)
        // mapear body
        const proyectBody = {
            title,
            sub_title,
            images,
            repository_url,
            demo_url,
            description,
            tecnologies,
            learning_gained,
            difficulties,
            end_date
        }

        // subirlo al mongo
        const newProyect = await Create(proyectBody);

        return successResponseWithData(res,'Nuevo Proyecto creado correctamente.',newProyect)

    } catch (error) {
        console.error(error)
    }

}

export const GetProyects = async(req,res,next)=>{


    try {
        const proyects = await GetAll();

        return successResponseWithData(res,'Proyectos visualizados correctamente.', proyects);

    } catch (error) {
        console.log(error)
    }

}


export const DeleteProyect = async(req,res,next)=>{
    
    const {id} = req.params;

    try{

        const proyectDeleted = await Delete(id)
        return successResponseWithData(res,'Proyecto eliminado correctamente', proyectDeleted);

    }catch(error){
        console.log(error)
    }

}


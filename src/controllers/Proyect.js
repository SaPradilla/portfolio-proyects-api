
import { successResponseWithData,ErrorResponse,notFoundResponse } from "../helpers/http/responses.js";
import {createProyect,getProyects,deleteProyect} from '../services/product.js'

export const CreateProyect = async (req, res, next) => {
    // Obtener body 
    const proyect = req.body;
    // Obtener las imágenes
    const imagesBuffer = req.files;

    try {
        const newProyect = await createProyect(proyect, imagesBuffer);

        return successResponseWithData(res, 'Nuevo Proyecto creado correctamente.', newProyect);

    } catch (error) {
        if (error.message.includes('Errores de validación')) {
            // Manejar errores de validación
            return ErrorResponse(res, 'Errores de validación', error.message);
        } else {
            // Manejar otros tipos de errores
            console.error(error);
            return ErrorResponse(res, 'Hubo un error al crear un proyecto', error.message);
        }
    }
}

export const GetProyects = async(req,res,next)=>{
    try {
        const proyects = await getProyects();
        return successResponseWithData(res,'Proyectos visualizados correctamente.', proyects);

    } catch (error) {
        console.log(error)
        return ErrorResponse(res,'Hubo un error al visualizar los proyectos',error);
    }

}


export const DeleteProyect = async(req,res,next)=>{
    
    const {id} = req.params;

    try{

        const proyectDeleted = await deleteProyect(id);
        if(!proyectDeleted) return notFoundResponse(res,'no se pudo encontrar el proyecto ')

        return successResponseWithData(res,'Proyecto eliminado correctamente', proyectDeleted);

    }catch(error){
        console.log(error)
        return ErrorResponse(res,'Hubo un error al eliminar un proyecto',error);        
    }
}


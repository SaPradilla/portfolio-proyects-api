import { validateBody } from "../helpers/validate_body.js";
import { Create,GetAll,Delete } from "../repository/Proyect.repository.js";
import { uploadImages } from "../services/uploadImage.js";


export const createProyect = async (proyectBody, imagesBody) => {
    // Validar los datos del body
    const errors = validateBody(proyectBody,imagesBody);
    if (errors.length > 0) {
        throw new Error(errors.join(', '));
    }

    try {
        // Subir imágenes
        const images = await uploadImages(imagesBody);

        // Agregar las imágenes al cuerpo del proyecto
        proyectBody.images = images;

        // Subirlo a MongoDB
        const newProyect = await Create(proyectBody);

        return newProyect;
    } catch (error) {
        throw new Error(`Error al crear el proyecto: ${error.message}`);
    }
}
export const getProyects = async()=>{

    try {
        
        const proyects = await GetAll();

        return proyects;

    } catch (error) {
        throw error;
    }

}

export const deleteProyect = async(idProyect)=>{

    try {
        
        const proyectDeleted = await Delete(idProyect);
        return proyectDeleted;

    } catch (error) {
        throw error;
    }


}
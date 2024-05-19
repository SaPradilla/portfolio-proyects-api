import Proyect from '../models/Proyect.js';

export const Create = async(proyectBody)=>{
    
    try {
        
        const newProyect = new Proyect(proyectBody);
        // guardar en la base de datos
        await newProyect.save();
           
        return newProyect

    } catch (error) {
        console.log(`Error al crear un proyecto: ${error}`)
    }

}

export const GetAll = async()=>{

    try {
        
        const proyects = await Proyect.find();


        return proyects;

    } catch (error) {
        console.log(error)
    }

}
export const Delete = async(id)=>{

    try {
        
        const proyectDeleted = await Proyect.findByIdAndDelete({_id:id});
        
        return proyectDeleted;

    } catch (error) {
        console.log(error)
    }

}
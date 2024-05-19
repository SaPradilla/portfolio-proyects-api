import mongoose,{ Schema } from "mongoose";


const proyectSchema = new Schema({
    title:{
        type:String,
    },
    sub_title:{
        type:String,
    },
    images: [{
        img: {
            type: String,
        },
        thumbnail: {
            type: String,
        },
        alt: {
            type: String,
        }
    }],
    repository_url:{
        type:String,
    },
    demo_url:{
        type:String,
    },
    description:{
        type:String,
    },
    tecnologies:[{
        type:String
    }],
    learning_gained:{
        type:String,
    },
    difficulties:{
        type:String,
    }
    

});
const proyectos = mongoose.model('Proyectos', proyectSchema);

export default proyectos;
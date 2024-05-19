import mongoose,{ Schema } from "mongoose";


const proyectSchema = new Schema({
    title:{
        type:String,
    },
    sub_title:{
        type:String,
    },
    end_date:{
        type:Date,
    },
    images: [{
        img: {
            type: String,
        },
        thumbnail: {
            type: String,
        },
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
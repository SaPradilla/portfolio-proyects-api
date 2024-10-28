
import mongoose,{ Schema } from "mongoose";


const pradiUserSchema = new Schema({

    password:{
        type:String,
        required:true,
    }
    
});

const pradiUser = mongoose.model('PradiUser',pradiUserSchema);

export default pradiUser;
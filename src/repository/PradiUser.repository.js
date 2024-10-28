import pradiUser from "../models/PradiUser.js";

export const Create = async(pwdBody)=>{

    try {
        
        const newPwd = new pradiUser({password:pwdBody});
        await newPwd.save();

        return newPwd;


    } catch (error) {
        console.log(error)
        throw error;

    }

}
export const Get = async()=>{

    try {
        
        const newPwd = await pradiUser.find()

        return newPwd;


    } catch (error) {
        console.log(error)
        throw error;

    }

}
export const GetById = async(id)=>{

    try {
        
        const findPwd = await pradiUser.findById(id)

        return findPwd;


    } catch (error) {
        console.log(error)
        throw error;

    }

}
export const Update = async(id,newPwdBody)=>{


    try {
        const pwdUpdated =  await pradiUser.findByIdAndUpdate(id,{password:newPwdBody})
        console.log(pwdUpdated);
        return pwdUpdated


    } catch (error) {
        console.log(error);
        throw error;
    }


}
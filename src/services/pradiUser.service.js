import Encrypt from "../helpers/bcrypt.js";
import { generateToken } from "../helpers/jwt.js";
import { Create, Update,Get,GetById } from "../repository/PradiUser.repository.js";


export const createPradiUser = async(pwdBody)=>{

    // validar datos body
    if(!pwdBody) throw new Error('password is required')

    try {

        // busca si ya hay 

        const findPwd = await Get();
        console.log(findPwd.length)
        if(findPwd.length === 1) throw new Error('No puedes crear una pwd, ya hay una')
        // encriptar
        const newPwdEncrypt = await Encrypt.cryptPassword(pwdBody);
        
        const newPwd = await Create(newPwdEncrypt);

        return newPwd;
        
    } catch (error) {
        console.log(error)
        throw new Error(`Error al crear el usuario pradi: ${error.message}`);
    }

}

export const loginPradiUser = async(pwd)=>{
    if(!pwd) throw new Error('password is required');

    try {
        
        // buscar
        const hashPwdFind = await Get();
        if(!hashPwdFind) throw new Error(`No se encontro`);

        // validar passsword
        const comparedPwd = await Encrypt.comparePassword(pwd,hashPwdFind[0].password);
        if(!comparedPwd) throw new Error('Acceso no permitido')

        // general jwt
        const token = generateToken(hashPwdFind[0].id);
        return token;


    } catch (error) {
        throw new Error(`Error al autenticar se: ${error.message}`)
    }

}

export const updatePradiUser = async(id,newPwdBody)=>{

    if(!id) throw new Error('id is required');
    
    if(!newPwdBody) throw new Error('body updated is required');
    
    try {
        
        // buscar si existe 
        const findPwd = await GetById(id);
        if(!findPwd) throw new Error('No existe');
        
        const newPwdEncrypt = await Encrypt.cryptPassword(newPwdBody);

        const newUpdated = await Update(id,newPwdEncrypt);
        
        return newUpdated;
        

    } catch (error) {
        throw new Error(`Error al actualizar el usuario pradi ${error.message}`)
    }

}
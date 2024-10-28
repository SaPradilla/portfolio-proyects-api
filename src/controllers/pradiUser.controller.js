import { ErrorResponse, successResponseWithData, unauthorizedResponse } from "../helpers/http/responses.js";
import { createPradiUser, updatePradiUser,loginPradiUser } from "../services/pradiUser.service.js";


export const CreatePradiUser =  async(req,res)=>{


    const {pwd} = req.body;
    

    try {
        const newUserPradi = await createPradiUser(pwd);
        
        return successResponseWithData(res,'Usuario pradi creado',newUserPradi);


    } catch (error) {
        return ErrorResponse(res,'Hubo un error al crear el usuario pradi',error);
    }

}
export const Login = async(req,res)=>{

    const {pwd} = req.body;
    try {
        
        const userPradiAuth = await loginPradiUser(pwd);
        return successResponseWithData(res,'Logeado!',userPradiAuth);

    } catch (error) {
        if(error.message === 'Acceso no permitido'){
            return unauthorizedResponse(res,'Acceso no permitido');
        }else{
            return ErrorResponse(res,'Error al auth',error)
        }
    }

}
export const UpdatePradiUser =  async(req,res)=>{


    const {id} = req.params;
    const {pwd} = req.body;
    

    try {
        
        const newUserPradi = await updatePradiUser(id,pwd);
        
        return successResponseWithData(res,'Usuario pradi actualizado',newUserPradi);


    } catch (error) {
        return ErrorResponse(res,'Hubo un error al actualizar el usuario pradi');
    }

}

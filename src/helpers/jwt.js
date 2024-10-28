import jwt from 'jsonwebtoken';



export const generateToken = (data)=>{

    const token = jwt.sign(
        { id:data }, process.env.TOKEN_KEY, { expiresIn:  process.env.TOKEN_EXPIRE, }
    )

    return token;
}
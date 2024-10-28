import jwt from 'jsonwebtoken';

export const verifyToken = (req, res, next) => {

    const token = req.headers["auth-token"]

    if (!token) {
        return res.status(401).json({ error: "Acceso denegado" });
    }

    try {
        const verified = jwt.verify(token, process.env.TOKEN_KEY)
        req.user = verified;
        if(r)
        next();

    } catch (err) {
        return res.status(401).json("Token no válido");
    }
};
export const validateAndExtractToken = (req,res)=>{
    const {token} = req.body
    if (!token) {
        return res.status(401).json({ error: "Acceso denegado" });
    }
    try {
        const verifiedToken = jwt.verify(token, process.env.TOKEN_KEY)
        if(verifiedToken){
            return res.status(200).json(verifiedToken);
        }

    } catch (err) {
        return res.status(401).json("Token no válido");
    }
}
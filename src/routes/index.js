import { Router } from "express";
import {CreateProyect,GetProyects,DeleteProyect } from '../controllers/proyect.controller.js'
import { upload } from "../middleware/multer.js";
import { CreatePradiUser,UpdatePradiUser,Login } from "../controllers/pradiUser.controller.js";
import { verifyToken ,validateAndExtractToken } from "../middleware/auth.js";

// instanciamiento del router
const router = Router();

// rutas
router
    // proyects
    .post('/proyect',verifyToken,upload,CreateProyect)
    .delete('/proyect/:id',verifyToken,DeleteProyect)

    .get('/proyects',GetProyects)

    
    // user pradi
    .post('/pradi',CreatePradiUser)
    .put('/pradi/:id',verifyToken,UpdatePradiUser)
    .post('/pradi/login',Login)
    .post('/verify',validateAndExtractToken)

export default router;
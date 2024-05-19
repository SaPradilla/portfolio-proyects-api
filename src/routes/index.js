import { Router } from "express";
import {CreateProyect,GetProyects,DeleteProyect } from '../controllers/Proyect.js'
import { upload } from "../middleware/multer.js";

// instanciamiento del router
const router = Router();

// rutas
router
    .post('/proyect',upload,CreateProyect)
    .get('/proyects',GetProyects)
    .delete('/proyect/:id',DeleteProyect)


export default router;
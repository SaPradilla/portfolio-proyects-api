// Importacion de cloudinary
import {v2 as cloudinary} from 'cloudinary';

// Importar Multer
import multer from 'multer';

// Configuracion del cloundinary
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET,
});

// Metodo para configurar la imagen
// Almacenamiento en memoria, ya que Cloudinary lo necesita así
const fileStorage = multer.memoryStorage();

// Metodo para subir la imagen con la configuracion
export const upload = multer({

    storage: fileStorage,
    // Detecta si la imagen tiene la extensión correcta
    fileFilter(req, file, cb) {
        if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
            cb(null, true);
        } else {
            cb(new Error('Formato No Válido'));
        }

    },
}).array('imagesBuffer');


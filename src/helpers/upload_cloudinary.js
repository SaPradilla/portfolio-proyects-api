import {v2 as cloudinary} from 'cloudinary';

export const uploadCloudinary = async(image)=>{


    return new Promise((resolve,reject)=>{

        cloudinary.uploader.upload_stream(
            { resource_type: 'auto', folder: 'proyects-images' },
            (error, result) => {
                if (error) {
                    reject(new Error('Error al subir la imagen a Cloudinary'));
                } else {
                    resolve(result.secure_url);
                }
            }
        ).end(image.buffer)

    })
    
}
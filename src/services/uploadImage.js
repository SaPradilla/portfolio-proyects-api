
import { compress } from "../helpers/compress_image.js";
import { uploadCloudinary } from '../helpers/upload_cloudinary.js';

export const uploadImages = async(images) => {

  try {

    let imagesObject = [];

    // interar la lista de imagenes
    for (const image of images) {

      // Subir la imagen normal
      const img = await uploadCloudinary(image)


      // comprimir la imagen
      const thumbnailCompress  = await compress(image);
      // subir thumbnail
      const thumbnail = await uploadCloudinary(thumbnailCompress);

      // cargarlo en un arreglo de imagenes 
      imagesObject.push({img,thumbnail})
    }
    console.log(imagesObject);
    return imagesObject;
    
  } catch (error) {
    new Error('Error al subir las imágenes a Cloudinary')
  }

}

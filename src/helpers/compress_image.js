import sharp from "sharp"

export const compress = async(image)=>{
    
    
    const compressedImage = await sharp(image.buffer)
        .resize({ width: 100, height: 60, fit: 'contain' })
        .toBuffer();

    image.buffer = compressedImage


    return image;


}
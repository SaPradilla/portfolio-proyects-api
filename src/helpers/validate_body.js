

export const validateBody = (proyectBody,imagesBody)=>{

    const errors = [];

    if(!imagesBody || imagesBody.length === 0){
        errors.push('at least one image is required');``
    }
    if(!proyectBody.title){
        errors.push('title is required');
    }
    if(!proyectBody.sub_title){
        errors.push('sub title is required')
    }
    if(!proyectBody.repository_url){
        errors.push('repository url is required');
    }
    if(!proyectBody.description){
        errors.push('description is required');
    }
    if(!proyectBody.tecnologies){
        errors.push('tecnologies is required')
    }
    if(!proyectBody.learning_gained){
        errors.push('learning_gained is required')
    }
    if(!proyectBody.difficulties){
        errors.push('difficulties is required')
    }

    
    return errors;

}
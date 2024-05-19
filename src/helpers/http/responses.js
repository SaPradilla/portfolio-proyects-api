
export const successResponse = (res, msg)=> {
	var data = {
		message: msg
	}
	return res.status(200).json(data);
}

export const successResponseWithData = (res, msg, data) =>{
	var resData = {
		message: msg,
		data: data
	}
	return res.status(200).json(resData)
}

export const ErrorResponse =  (res, msg,error) =>{
	var data = {
		message: msg,
		errorMensaje:error.message,
		error:error
	}
	return res.status(500).json(data)
}

export const notFoundResponse =  (res, msg) =>{
	var data = {
		message: msg
	}
	return res.status(404).json(data)
}

export const validationErrorWithData =  (res, msg, data) =>{
	var resData = {
		message: msg,
		data: data
	}
	return res.status(400).json(resData)
}
export const validationError =  (res, msg) =>{
	var resData = {
		message: msg
	}
	return res.status(400).json(resData)
}
export const errorDataJoi = (res,error) => {
	var resData = {
		message: error.details[0].message,
		data: error
	}
	return res.status(400).json(resData)
}
export const autenticationSuccess =  (res, msg,token,user) =>{
	var resData = {
		message: msg,
		token:token,
		data:user
	}
	return res.status(400).json(resData)
}

export const unauthorizedResponse =  (res, msg)=> {
	var data = {
		message: msg
	}
	return res.status(401).json(data)
}

export const insufficientResponse = (res,msg)=>{
	var data = {
		message: msg
	}
	return res.status(500).json(data)
}

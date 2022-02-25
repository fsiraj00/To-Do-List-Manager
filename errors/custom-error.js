

class CustomAPIError extends Error{
    constructor(message,statusCode){
    //invokes constructor of parent class
        super(message); 
        this.statusCode = statusCode;
    }
}

const createCustomError = (msg, statusCode) => {
    return new CustomAPIError(msg, statusCode);
}

module.exports= {
    CustomAPIError,
    createCustomError
}
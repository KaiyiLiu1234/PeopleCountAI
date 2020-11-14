const Joi = require('@hapi/joi');


//validation for business model
function registrationBusinessVerification(registrationObject){

    const schema = Joi.object({
        email: Joi.string().min(7).required().email(),
        pass: Joi.string().min(6).required(),
        companyName: Joi.string().min(1).max(70).required(),
        address: Joi.string().min(6).max(50).required(),
        postalCode: Joi.string().min(4).max(50).required(),
        description: Joi.string().min(10).max(1000).required(),
        maxNumberOfPeople: Joi.number().min(0).required()
    });

    return schema.validate(registrationObject);
}

function registrationUserVerification(registrationObject){

}

module.exports.registrationBusinessVerification = registrationBusinessVerification;



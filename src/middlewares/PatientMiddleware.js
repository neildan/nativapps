const Joi = require("joi");

const validate = (req, res, next) => {
    const schema = Joi.object().keys({
        id: Joi.string().min(1).max(20).regex(/^\d+$/).required().label(`The field 'id' is required and only allows 20 numbers maximum`),
        first_name: Joi.string().min(1).max(255).required().label(`The field 'first_name' is required and only allows 255 letters maximum`),
        last_name: Joi.string().min(1).max(255).required().label(`The field 'last_name' is required and only allows 255 letters maximum`),
        email: Joi.string().min(1).max(255).email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required().label(`The field 'email' is required and only allows a valid email address`),
        phone: Joi.string().min(1).max(20).regex(/^\d+$/).required().label(`The field 'phone' is required and only allows 20 numbers maximum`)
    });
    const { error } = schema.validate(req.body, { abortEarly: false });
    if (error) {
        return res.status(500).send({
            message: error.details[0].context.label,
            code: 500
        });
    }
    return next();
}

module.exports = {
    validate: validate
}
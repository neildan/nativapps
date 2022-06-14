const Joi = require("joi");

class PatientMiddleware {
    constructor() {
        this.schema = Joi.object().keys({
            id: Joi.string().min(1).max(20).regex(/^\d+$/).required(),
            first_name: Joi.string().min(1).max(255).required(),
            last_name: Joi.string().min(1).max(255).required(),
            email: Joi.string().min(1).max(255).email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
            phone: Joi.string().min(1).max(20).regex(/^\d+$/).required()
        })
    }

    validate(req, res, next) {
        const { error } = this.schema.validate(req.body);
        if (error) {
            return res.status(500).send(error.details[0].message);
        }
        return next();
    }
}

module.exports.PatientMiddleware = PatientMiddleware;
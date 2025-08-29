import Joi from 'joi';

const userSchema = Joi.object({
  quantidade: Joi.number().required(),
  usuarios: Joi.array()
    .items(
      Joi.object({
        nome: Joi.string().required(),
        email: Joi.string().email().required(),
        password: Joi.string().required(),
        administrador: Joi.string().valid('true', 'false').required(),
        _id: Joi.string().required(),
      })
    )
    .required(),
});

export default userSchema;

import Joi from 'joi';

export const tracklistQuery = Joi.object({
  url: Joi.string()
    .regex(
      /^(http(s)??:\/\/)?(www\.)?((youtube\.com\/watch\?v=)|(youtu.be\/))([a-zA-Z0-9\-_])+/,
    )
    .required(),
});

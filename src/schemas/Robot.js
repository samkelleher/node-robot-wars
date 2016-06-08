import Joi from 'joi';

const RobotSchema = Joi.object().keys({
    start: Joi.object().keys({

    }),
    instructions: Joi.array()
});

export default RobotSchema;

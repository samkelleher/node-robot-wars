import Joi from 'joi';
import PositionSchema from './Position';

const RobotSchema = Joi.object().keys({
    start: PositionSchema,
    instructions: Joi.array().items(Joi.string().allow('Left', 'Right', 'Move').required()).min(1).required()
});

export default RobotSchema;

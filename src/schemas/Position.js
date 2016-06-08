import Joi from 'joi';

const PositionSchema = Joi.object().keys({
    x: Joi.number().integer().positive().required().description('The x coordinate of the Robot on the map.'),
    y: Joi.number().integer().positive().required().description('The y coordinate of the Robot on the map.'),
    heading: Joi.string().required().allow('North', 'South', 'East', 'West')
});

export default PositionSchema;

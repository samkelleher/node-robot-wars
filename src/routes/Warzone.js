import RobotSchema from '../schemas/Robot';
import PositionSchema from '../schemas/Position';
import Debug from 'debug';
import boom from 'boom';
import Joi from 'joi';
import Robot from '../models/Robot';
import Warzone from '../models/Warzone';

const debug = Debug('App:Warzone');

export default {
    method: 'POST',
    config: {
        payload: {
            parse: true
        },
        description: 'War Zone',
        notes: 'Places robots in the war zone, and returns their positions after battle.',
        tags: ['warzone'],
        auth: false,
        validate: {
            payload: Joi.array().items(RobotSchema.required()).min(1),
            params: {
                width: Joi.number().integer().positive().required().description('The number of squares the battlefield is wide.'),
                height: Joi.number().integer().positive().required().description('The number of squares the battlefield is wide.')
            }
        },
        response: {
            schema: Joi.array().items(PositionSchema.required()).min(1)
        }
    },
    path: '/warzone/{width}/{height}',
    handler: function (request, reply) {

        debug('Starting warzone request processing.');

        const robots = request.payload.map(robotJson => new Robot());

        const warzone = new Warzone({
            width: request.params.width,
            height: request.params.height,
            robots
        });

        const result = warzone.goToBattle().toJSON();

        debug('Generated Result: ', result);

        reply(result);

        debug('Finished warzone request processing.');

    }
};

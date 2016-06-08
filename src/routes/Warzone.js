import RobotSchema from '../schemas/Robot';
import Debug from 'debug';
import boom from 'boom';
import Joi from 'joi';
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
            payload: Joi.array().items(),
            params: {
                width: Joi.string().guid().required(),
                height: Joi.string().guid().required()
            }
        },
        response: {
            schema: Joi.object().keys({}).unknown()
        }
    },
    path: '/warzone/{width}/{height}',
    handler: function (request, reply) {

        reply({});

    }
};

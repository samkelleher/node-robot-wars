import Hapi from 'hapi';
import Debug from 'debug';
import vision from 'vision';
import inert from 'inert';
import lout from 'lout';
import Warzone from './routes/Warzone';

const debug = Debug('App:Server');

export default function Server() {

    const server = new Hapi.Server({
        debug: {
            request: ['verbose'],
            log: ['verbose']
        }
    });

    server.connection({
        port: '8080'
    });

    // Initialization Chain...
    return server
        .register([vision, inert, {
            register: lout, options: {endpoint: '/documentation'}
        }])
        .catch((err) => {
            debug('Failed to setup documentation visualizer.');
            throw err;
        })
        .then(() => {
            server.route(Warzone);
            debug('System APIs registered.');
            return server.start();
        })
        .then(() => {
            return Promise.resolve(server);
        })
        .catch((e) => {
            debug('This API cannot run.', e);
            return Promise.reject(e);
        });

}

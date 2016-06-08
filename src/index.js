import Server from './Server';

const env = process.env.NODE_ENV;
console.log('Setting up API for %s.', env);

Server()
    .then((server) => {

        console.log('------------------------------');
        console.log('--');
        console.log('-- RobotWars Server listening at %s 🚀', server.info.uri);
        console.log('--');
        console.log('------------------------------');

    })
    .catch((error, server) => {

        console.log('------------------------------');
        console.log('--');
        console.log('-- RobotWars Server Failed to Start 💀');
        console.log('--');
        console.log('------------------------------');
        console.log(error);
        process.exit(1);

    });

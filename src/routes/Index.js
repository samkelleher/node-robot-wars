export default {
    method: 'GET',
    config: {
        description: 'Root',
        notes: 'Redirects to documentation.',
        tags: ['index'],
        auth: false,
        plugins: {
            lout: false
        }
    },
    path: '/',
    handler: function (request, reply) {

        return reply.redirect('/documentation');

    }
};

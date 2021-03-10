import {fastify} from 'fastify';

const host = process.env.LISTEN_HOST || '0.0.0.0';
const port = parseInt(process.env.LISTEN_PORT || '') || 3000;
const fast = fastify();

fast.get('/', (request, reply) => {
    reply.send({hello: 'world'});
});

fast.listen(port, host, (error, address) => {
    if (error) {
        console.error(error);
        process.exit(1);
    }

    console.log(`Server listening on ${address}...`);
});

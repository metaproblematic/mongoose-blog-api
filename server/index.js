const server = require('./app');

server.listen(process.env.port || 8080, () => {
    console.log('Server is listening on http://localhost:8080');
})
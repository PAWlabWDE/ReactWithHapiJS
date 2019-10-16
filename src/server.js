// Serve up all static content in build folder
server.route({
    method: 'GET',
    path: '/app/{path*}',
    handler: {
        directory: {
            path: Path.join(__dirname, '../../client/build/'),
            listing: false,
            index: true
        }
    }
});
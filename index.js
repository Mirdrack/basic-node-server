var server = require('./server');
var router = require('./router');
var requestHandlers = require('./handler');

var handle = {};
handle['/'] = requestHandlers.home;
handle['/home'] = requestHandlers.home;
handle['/contact'] = requestHandlers.contact;


server.run(router, handle);
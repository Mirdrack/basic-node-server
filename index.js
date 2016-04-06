var http = require('http');
var url = require('url');

var router = require('./router');
var requestHandlers = require('./handler');

var handle = {};
handle['/'] = requestHandlers.home;
handle['/home'] = requestHandlers.home;
handle['/contact'] = requestHandlers.contact;



function onRequest(request, response) {

	console.log('Request...');

	var pathname = url.parse(request.url).pathname;
	router.handle(pathname, handle, response);
}

http.createServer(onRequest).listen(8000);
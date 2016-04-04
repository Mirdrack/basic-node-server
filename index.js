var http = require('http');
var url = require('url');


http.createServer(onRequest).listen(8000);

function onRequest(request, response) {

	console.log('Server ready...');

	var pathname = url.parse(request.url).pathname;
    console.log('Request for:' + pathname);

	response.writeHead(200, {'Content-Type': 'text/html'});
	response.write('Hello Im a random route');
	response.end();

}
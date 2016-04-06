var http = require('http');
var url = require('url');

module.exports = {

	run: function (router, handle) {
		
		function onRequest(request, response) {

			console.log('Request...');

			var pathname = url.parse(request.url).pathname;
			router.handle(pathname, handle, response);
		}
		
		http.createServer(onRequest).listen(8000);
		console.log('Server running...');
	}
};
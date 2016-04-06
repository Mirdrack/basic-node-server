exports.handle = function (pathname, handle, response) {
  
  		console.log('Routing: ' + pathname);

		if (typeof handle[pathname] === 'function') {

			handle[pathname](response);
		}
		else {

			console.log('There is no handler for ' + pathname);
			response.writeHead(404, {"Content-Type": "text/html"});
			response.write('404 Not found');
			response.end();
	  }
};
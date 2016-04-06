module.exports = {

	home: function (response) {

		console.log('Home page handler');

		response.writeHead(200, {'Content-Type': 'text/html'});
		response.write('<h1>Home Page</h1>');
		response.end();
	},
	
	contact: function (response) {

		console.log('Contact page handler');

		response.writeHead(200, {'Content-Type': 'text/html'});
		response.write('Contact Page');
		response.end();
	}
};
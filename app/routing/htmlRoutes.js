// We need to include the path package to get the correct file path for our html
var path = require('path');
// ROUTING
module.exports = function(app){

	app.get('/', function(request, result){
		result.sendFile(path.join(__dirname, '../public/home.html'));
	});
    app.get('/survey', function(request, result){
		result.sendFile(path.join(__dirname, '../public/survey.html'));
	});
};
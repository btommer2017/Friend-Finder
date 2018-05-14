// Inclue paths to the hmtl pages
var path = require('path');
// Routing
module.exports = function(app){

	app.get('/', function(request, result){
		result.sendFile(path.join(__dirname, '../public/home.html'));
	});
    app.get('/survey', function(request, result){
		result.sendFile(path.join(__dirname, '../public/survey.html'));
	});
};
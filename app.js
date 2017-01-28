var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();

/*
var logger = function(req,res, next) {
	console.log('Logging...');
	next();
}

app.use(logger);
*/

//View Engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//Set Static Path, Then I created a public folder for static resources such as CSS files or HTML.
/* app.use(express.static(path.join(__dirname, 'public'))); */

/* 
var people = [{
	name:'Jeff',
	age: 30
},{
	name:'Lisa',
	age: 22
},{
	name:'Bill',
	age: 40
}] 

*/

var users = [{

	id: 1,
	first_name: 'John',
	last_name: 'Doe',
	email: 'johndoe@gmail.com',
},{

	id: 2,
	first_name: 'Bob',
	last_name: 'Smith',
	email: 'bobsmith@gmail.com',
},{
	id: 3,
	first_name: 'Jill',
	last_name: 'Jackson',
	email: 'jjackson#gmail.com',
}]

app.get('/', function(req,res){
	/* var title = 'Customers';*/
	res.render('index', {
		title: 'Customers',
		users: users
	});
});

app.listen(3000, function(){
	console.log('Server Started on Port 3000...');
})
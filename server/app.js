var express = require('express'),
	path = require('path'),
	app = express(),
	server = require('http').createServer(app),
	bodyParser = require('body-parser');

	app.use(bodyParser.urlencoded({extended : true}));

	app.set('view engine', 'hbs');
	app.set('views' , path.join(__dirname, 'views'));

	app.use(express.static(path.join(__dirname, 'public')));

var user = [{username: "", password: ""}];

	var dataFormOurDatabase = [{
		"movie": "Almost Famous",
		"url": "https://upload.wikimedia.org/wikipedia/en/d/dd/Almost_famous_poster1.jpg",
		"plot": "Highschool boy goes on tour with a band and writes a article about them for Rolling Stones magazine, he ends up falling for one of the girls who inlove with one of the band members! "
	},{
		"movie": "Empire Records",
		"url": "https://i.jeded.com/i/empire-records.17069.jpg",
		"plot": "Group of kids working at a record store and throw a concert to try to save the shop!"

	}]

	app.get('/profile', function(request, response){
		response.render('profile', {userData: dataFormOurDatabase})

	}),

	app.get('/home', function(request, response){
	response.render('home');
});

	app.get('/', function(request, response){
		response.render('home');
	});

	app.get('/register', function(request, response){
		response.render('register');
	});

	app.post('/register', function(request, response){
		console.log(request.body);
		user.push({username: request.body.username, password: request.body.userpassword});
		console.log(user);
		response.render('login');
	});

	app.get('/login', function(request, response){
		response.render('login');
	});

	app.post('/login', function(request, response){
		console.log(request.body);
		var loginUserName = request.body.username;
		var loginUserPassword = request.body.userpassword;
		for(i=0; i<user.length; i++){
			if(loginUserName === user[i].username){
				if(loginUserPassword === user[i].password){
					response.render('profile', {userData: dataFormOurDatabase});
				}else{
					response.send('failure');
				}
			}
		}
	});

	// var dataFormOurDatabase = [{
	// 	"movie": "Almost Famous",
	// 	"url": "https://upload.wikimedia.org/wikipedia/en/d/dd/Almost_famous_poster1.jpg",
	// 	"plot": "Highschool boy goes on tour with a band and writes a article about them for Rolling Stones magazine, he ends up falling for one of the girls who inlove with one of the band members! "
	// },{
	// 	"movie": "Empire Records",
	// 	"url": "https://i.jeded.com/i/empire-records.17069.jpg",
	// 	"plot": "Group of kids working at a record store and throw a concert to try to save the shop!"

	// }]

	// app.get('/profile', function(request, response){
	// 	response.render('profile', {userData: dataFormOurDatabase})

	// }),

	app.get('/movies', function(request, response){
		response.json({name: 'hi im movies'});
	});

	app.post('/movies', function(request, response){
		console.log(request.body);
		response.send({});
	});


	server.listen(3000, function(){
		console.log('server is listening on port 3000')
	})

var express = require('express')
var morgan = require('morgan')
var swig = require('swig')

var app = express()

app.engine('html', swig.renderFile)
app.set('view engine', 'html')
app.set('views', __dirname + '/views')

app.use(morgan('dev'))

app.get('/', function (req, res) {
	res.send('hello, world!')
})

app.get('/news', function (req, res){
	res.send("You're reading news!")
})

var server = app.listen(3000, function () {

	var host = server.address().address;
	var port = server.address().port;

	console.log('Server Listening', host, port);

});
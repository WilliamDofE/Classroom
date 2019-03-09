var express = require('express');
var app = express();
var serv = require('http').Server(app);
var io = require('socket.io')(serv);
var path = require('path');

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
 
app.use(express.static('client/home'));

app.post('/createSchool', function(req, res) {
	response = {
		school_name: req.body.schoolName,
		school_private: req.body.schoolPrivate,
		entry_password: req.body.entryPassword
	};
	console.log(response);
  
  
  res.sendFile(path.join(__dirname, '/client/school/index.html'));
  
  io.emit('updateSchool', response);
});
 
serv.listen(3000);
console.log("Server started on localhost://3000");

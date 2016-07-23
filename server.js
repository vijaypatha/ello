//Dependencies - default
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var morgan = require('morgan');
var mongoose = require('mongoose');
var session = require('express-session');
var passport = require('passport');
var FacebookStrategy = require('passport-facebook').Strategy;
//controllers
var ListCtrl = require('./controllers/ListCtrl');
var TaskCtrl = require('./controllers/TaskCtrl');

//Express - default
var app = express();
var port = 8080;
require('./config/passport-facebook.js')(passport,app);


//database
var mongoUri = 'mongodb://admin:admin@ds017185.mlab.com:17185/ello';

mongoose.connect(mongoUri);
mongoose.connection.once('open',function(){
  console.log('Connection to mongoDB in mlab is successful');
});

//dataBase rules
var List = require('./models/list.model.js');
var Task = require('./models/task.model.js');
var User = require('./models/user.model.js');

//middleware - default
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('combined'));
//CURD
app.post('/list', ListCtrl.create);
app.get('/list', ListCtrl.read);
app.delete('/list/:id', ListCtrl.delete);
app.post('/task', TaskCtrl.create);
app.get('/task', TaskCtrl.read);
app.delete('/task/:id', TaskCtrl.delete);
//Connection

app.listen(port,function(){
  console.log('Node is looping on port ' + port);
});

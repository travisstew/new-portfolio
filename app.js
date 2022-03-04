const express  = require('express') //require express libary 
const exphbs = require('express-handlebars'); //require handlebars package 
const app = express();// call express as a function



const PORT = process.env.PORT || 3000; //set up port 

//app.use is a function in express for binding middleware to your application
//static files
app.use(express.static('public'));


//body parser - npm libary used to process data sent through an HTTP
app.use(express.urlencoded({extended:false}));
app.use(express.json());


//routes 
app.use('/', require('./routes/index'));

//template engine
app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');




//to make server run on a specific port 
app.listen(PORT,function () { 
  console.log('listening on port ' + PORT);
 });
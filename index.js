const express = require('express');
const cookieParser = require('cookie-parser');//ye cookie manula authentication me jore h
const app = express();
const port = 8000;
const expressLayouts = require('express-ejs-layouts');
const db = require('./config/mongoose');
//used for session cookie
const session = require('express-session');//expression session passport js me
const passport = require('passport');
const passportLocal = require('./config/passport-local-strategy');


app.use(express.urlencoded());//it will read post request
app.use(cookieParser());

app.use(express.static('./assets'));
app.use(expressLayouts);//ise hm route se pehledaalna hoga reason ki jo v view render hoga use btana hoga ki wo kisi layout ko belong krta h

//extract style and scripts from sub pages into the layout ye static file set kia h
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);



//set up view engine
app.set('view engine', 'ejs');
app.set('views','./views');//contact list yhi line __dirname krke kia the bs usi ko aise v likh skte h


//we need to add middle ware which takes session cookies and encrypts it
app.use(session({
    name: 'sociobook',
    // TODO change the secret before deployment in production mode
    secret: 'blahsomething',
    saveUninitialized: false,
    resave: false,
    cookie: {//giving age to the cookie
        maxAge: (1000 * 60 * 100)

    }
}));
app.use(passport.initialize());
app.use(passport.session());

//use express router
app.use('/', require('./routes'));

app.listen(port, function(err){
    if(err){console.log(`Error in running the server, ${err}`)};
    console.log(`Server is running on port: ${port}`);
});
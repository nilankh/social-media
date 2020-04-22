const express = require('express');
const app = express();
const port = 8000;
const expressLayouts = require('express-ejs-layouts');
const db = require('./config/mongoose');


app.use(express.static('./assets'));
app.use(expressLayouts);//ise hm route se pehledaalna hoga reason ki jo v view render hoga use btana hoga ki wo kisi layout ko belong krta h

//extract style and scripts from sub pages into the layout ye static file set kia h
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

//use express router
app.use('/', require('./routes'));

//set up view engine
app.set('view engine', 'ejs');
app.set('views','./views');//contact list yhi line __dirname krke kia the bs usi ko aise v likh skte h

app.listen(port, function(err){
    if(err){console.log(`Error in running the server, ${err}`)};
    console.log(`Server is running on port: ${port}`);
});
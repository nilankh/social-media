const express = require('express');
const app = express();
const port = 8000;

//use express router
app.use('/', require('./routes'));

//set up view engine
app.set('view engine', 'ejs');
app.set('views','./views');//contact list yhi line __dirname krke kia the bs usi ko aise v likh skte h

app.listen(port, function(err){
    if(err){console.log(`Error in running the server, ${err}`)};
    console.log(`Server is running on port: ${port}`);
});
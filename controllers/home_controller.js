
//ye post jv se banaye h tb ye line
const Post = require('../models/post');

// MANY ACTION IN ONE FILE CALLED AS CONTROLLER, a controller is a set of different actions
module.exports.home = function(req, res){
    // return res.end('<h1> Express is up for sociobook </h1>');
    // console.log(req.cookies);
    // res.cookie('user_id',25);

    // Post.find({}, function(err, posts){
    //     return res.render('home', {
    //         title: "Sociobook | Home",
    //         posts: posts
    //     });
    // });

    //popultae the user of each post 
    Post.find({}).populate('user').exec(function(err, posts){
        return res.render('home', {
            title: "Sociobook | Home",
            posts: posts
        });
    })
    
}
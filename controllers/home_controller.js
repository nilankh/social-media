// MANY ACTION IN ONE FILE CALLED AS CONTROLLER, a controller is a set of different actions
module.exports.home = function(req, res){
    // return res.end('<h1> Express is up for sociobook </h1>');
    return res.render('home', {
        title: "Home"
    });
}
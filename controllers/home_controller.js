// MANY ACTION IN ONE FILE CALLED AS CONTROLLER, a controller is a set of different actions
module.exports.home = function(req, res){
    // return res.end('<h1> Express is up for sociobook </h1>');
    // console.log(req.cookies);
    // res.cookie('user_id',25);
    return res.render('home', {
        title: "Home"
    });
}
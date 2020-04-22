//ye profile jo likhe h ye variable h
module.exports.profile = function(req, res){
    // res.end('<h1> User Profile </h1>');
    
    //now this controller is ready to access by the router
    return res.render('user_profile', {
        title: "Profile"
    });
}
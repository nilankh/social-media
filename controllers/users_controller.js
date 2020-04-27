const User = require('../models/user');

//ye profile jo likhe h ye variable h(ye pehle aaya h baad me upar wala manual authne)
module.exports.profile = function(req, res){
    // res.end('<h1> User Profile </h1>');
    
    //now this controller is ready to access by the router
    //ye line databse updating wala se aa rha bs User.fid wala
    User.findById(req.params.id, function(err, user){
        return res.render('user_profile', {
            title: "Profile",
            profile_user: user
        });
    });
 
}
//ye wala Deleting and Updating Objects in Database + Distributing Views
module.exports.update = function(req, res){
    if(req.user.id == req.params.id){
        User.findByIdAndUpdate(req.params.id, req.body, function(err, user){
            return res.redirect('back');
        });
    }else{
        return res.status(401).send('Unauthorized');
    }
}

// render the sign up page
module.exports.signUp = function(req, res){
    //now we will do sign up and signin page avilable only when user is signed out
    if(req.isAuthenticated()){
        return res.redirect('/users/profile');
    }


    return res.render('user_sign_up', {
        title: "Sociobook | Sign Up"
    });
}

// render the ssign in page
module.exports.signIn = function(req, res){
    //now we will do sign up and signin page avilable only when user is signed out
    if(req.isAuthenticated()){
        return res.redirect('/users/profile');
    }

    return res.render('user_sign_in', {
        title: "Sociobook | Sign In"
    });
}

//get up the sign up data
module.exports.create = function(req, res){
    if(req.body.password != req.body.confirm_password){
        return res.redirect('back');
    }

    User.findOne({email: req.body.email}, function(err, user){
        if(err){console.log('error in finding user in signing up'); return}

        if(!user){
            User.create(req.body, function(err, user){
                if(err){console.log('error in creating user while signing up'); return}

                return res.redirect('/users/sign-in');
            });
        }else{
            return res.redirect('back');
        }
    });
}

//sign in and create a session for the user
module.exports.createSession = function(req, res){
    return res.redirect('/');
}


//ye kab banaye h jb signout banaye h
//signout is basically removing the user's session cookie to remove the identity
module.exports.destroySession = function(req, res){
    // before redirecting we need to logout
    req.logout();//this is given by passport
    return res.redirect('/');
}
const Post = require('../models/post');

module.exports.create = function(req, res){
    Post.create({
        //HOME.EJS ME KO TEXT AREA ME NAAM H CONTENT WHI HOGA IDHR,or post.js me v conteent hi define kia ho
        content: req.body.content,
        user: req.user._id//ye user id islia h taaki pta rhe kaun user ka post kia
    }, function(err, post){
        if(err){console.log('error in creating a post'); return;}

        return res.redirect('back');

    })
}
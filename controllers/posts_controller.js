const Post = require('../models/post');
const Comment = require('../models/comment');//these line islia import kia q ki hme comment v deleete krna h q ki jb post delete hoga tb b toa comment v jhyga na

module.exports.create = function(req, res){
    Post.create({
        //HOME.EJS ME KO TEXT AREA ME NAAM H CONTENT WHI HOGA IDHR,or post.js me v conteent hi define kia ho
        content: req.body.content,
        user: req.user._id//ye user id islia h taaki pta rhe kaun user ka post kia
    }, function(err, post){
        if(err){console.log('error in creating a post'); return;}

        return res.redirect('back');

    });
}

module.exports.destroy = function(req, res){
    Post.findById(req.params.id, function(err, post){
        //.id means converting the object id into string
        if(post.user == req.user.id){//post == user the user who is deleting a post, who is written the post  
            post.remove();
            Comment.deleteMany({post: req.params.id}, function(err){
                return res.redirect('back');
            });
        }else{
            return res.redirect('back');
        }
    });
}
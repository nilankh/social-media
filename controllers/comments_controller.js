const Comment = require('../models/comment');
const Post = require('../models/post');

module.exports.create = async function(req, res){
    
    try{
        //we need to create comment over post, we need to find whether that post exist

    let post = await Post.findById(req.body.post);
        
    if(post){//if post is found
        let comment = await Comment.create({
            content: req.body.content,
            post: req.body.post,
            user: req.user._id
        });
        //adding comment to push
        post.comments.push(comment);
        post.save();//whenever i m updating something we have to save so that we can block, or bola jye save kr lia db me
        req.flash('success','comment krta h ji');
        res.redirect('/');
    }
    
    }catch(err){
        // console.log('Error', err);
        req.flash('error,err');
        return;
    }
    
}


module.exports.destroy = async function(req, res){
    try{
        let comment = await Comment.findById(req.params.id);
        
        if(comment.user == req.user.id){
            let postId = comment.post;
                
            comment.remove();
            
            let post = Post.findByIdAndUpdate(postId, { $pull :{comments:req.params.id}});
            req.flash('success','comments deleted!');
            return res.redirect('back');
                
            }else{
                req.flash('error', 'Unauthorized');
                return res.redirect('back');
            }
    }catch(err){
        // console.log('Error', err);
        req.flash('error', err);
        return;
    }
 
}
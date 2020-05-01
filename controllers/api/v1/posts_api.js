const Post = require('../../../models/post');
const Comment = require('../../../models/comment');
module.exports.index = async function(req, res){
    //index is genreally usually use when u want to list down something as an action name
    let posts = await Post.find({})
        .sort('-createdAt')//ye line bs sorted order me krega post
        .populate('user')
        .populate({
            path: 'comments',
            populate: {
            path: 'user'
        }
    });
    
    
    return res.json(200, {
        message: "List of posts",
        posts: posts
    });
}


//copy kia h post controller se

module.exports.destroy = async function(req, res){
    try{
        let post = await Post.findById(req.params.id);

        //.id means converting the object id into string
        // if(post.user == req.user.id){//post == user the user who is deleting a post, who is written the post  
            post.remove();
            
            await Comment.deleteMany({post: req.params.id});
            
           

            // req.flash('success','Post and associated comments deleted!');
            return res.json(200, {
                message: "IPost and associated comments deleted"
            });
        // }else{
        //     req.flash('error','You can not delete this post');
        //     return res.redirect('back');
        // }


    }catch(err){
        console.log('****', err);
        
        return res.json(500, {
            message: "Internal server error"
        });
    }
}
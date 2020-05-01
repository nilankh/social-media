module.exports.index = function(req, res){
    //index is genreally usually use when u want to list down something as an action name
    return res.json(200, {
        message: "List of posts",
        posts: []
    })
}
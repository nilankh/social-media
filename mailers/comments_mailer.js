const nodeMailer = require('../config/nodemailer');

// create a function which will send mail
//this is another way of exporting a metho issepehle dusre tarike se krte the
// whenever a new comment is made i need this function to be called kahan se hoga comments controller
exports.newComment = (comment) => {
    console.log("Inside new comment mailer", comment);

    nodeMailer.transporter.sendMail({
        from: 'nilankpunj@gmail.com',
        to: comment.user.email,
        subject: "New Comment Published",
        html: '<h1> Yup your comment is now published </h1>'
    }, (err, info) => {
        if(err){
            console.log("error in sending email", err);
            return;
        }
        console.log("Message sent ", info);
        return;
    });
}
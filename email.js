var nodemailer = require('nodemailer');

const send_email=(receiver)=>{
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'parthdhwajendramishra@gmail.com',
          pass: 'HANUmendra@2020'
        }
      });
        var fs = require('fs');
        var file = fs.readFileSync('./email_template/sendthis.html', "utf8");
      var mailOptions = {
        from: 'parthdhwajendramishra@gmail.com',
        to: receiver,
        subject: 'Sending Email using Node.js',
        html: file
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
}

module.exports={
    send_email:send_email
  };

const nodemailer = require('nodemailer');

const trans = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'avleathers@gmail.com',
    pass: 'Poiters123'
  }
});

let mail_op ={
  from: 'avleathers@gmail.com',
  to: 'designs@missyleathers.com',
  subject: 'Sending Email using Node.js',
  html: 'That was easy!'
};

trans.sendMail(mail_op, (err, info)=>{
  if(err){
    console.log(err);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
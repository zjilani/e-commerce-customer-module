// qzOsov6s7JvZfuVF
// const Nexmo = require('nexmo');

// const nexmo = new Nexmo({
//   apiKey: '16e111e5',
//   apiSecret: 'qzOsov6s7JvZfuVF',
// });

// const from = 'Vonage APIs';
// const to = '918083335945';
// const text = 'Hello from Vonage SMS API';

// nexmo.message.sendSms(from, to, text);
// console.log("Done Message")
const nodemailer = require('nodemailer')
process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;
const options = 
    {
        pool:true,
        // host: "smtp.gmail.com",
        service:"gmail",
        port: 587,
        secure: true, 
        auth: {
          user: "zaidjilani.09@gmail.com",
          pass: "sabihasofiya"
        },
      }
let transporter = nodemailer.createTransport(options);

let message = {
    from: "Jilani <zaidjilani.09@gmail.com>",
    to: ["Jilani <2018300@iiitdmj.ac.in>"],
    // cc:[],
    subject: "Message title",
    // text: "Plaintext version of the message",
    html: "<p>HTML version of the message</p>",
    // Embedded image: <br> <img style='width:5%' src='cid:unique@nodemailer.com'/>
    // attachments:[{
    //     filename: 'heart_icon.jpg',
    //     path: __dirname +'/heart_icon.jpg',
    //     cid: 'unique@nodemailer.com' //same cid value as in the html img src
    // }],
  };

  transporter.sendMail(message).then((response)=>{
      console.log(response)
  }).catch((e)=>{
      console.log(e)
  })

//   var htmlstream = fs.createReadStream("content.html");
// transport.sendMail({ html: htmlstream }, function(err) {
//   if (err) {
//     // check if htmlstream is still open and close it to clean up
//   }
// });


// verify connection configuration
// transporter.verify(function(error, success) {
//     if (error) {
//       console.log(error);
//     } else {
//       console.log("Server is ready to take our messages");
//     }
//   });
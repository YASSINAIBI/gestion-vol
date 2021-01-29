var express = require('express');
var router = express.Router();
var fs = require("fs");
var dbConn  = require('../lib/db');

/* GET home page. */
router.get('/', function(req, res, next) {
    // console.log(req.session.dipartTime)
    // console.log(req.session.prix)
    // console.log(req.session.frome)
    // console.log(req.session.to)

    // console.log(req.session.nom)
    // console.log(req.session.prenom)
    // console.log(req.session.email)
    // console.log(req.session.phone)

    "use strict";
const nodemailer = require("nodemailer");

// async..await is not allowed in global scope, must use a wrapper
async function main() {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
//   let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "aibiyassin8@gmail.com",
      pass: "VLfullStack@123",
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Y aibi 👻" <foo@example.com>', // sender address
    to: "aibiyassin8@gmail.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    // html: "<b>Hello world?</b>", // html body
    html: `<b>date de depart:</b> ${req.session.dipartTime} <br>
            <b>prix:</b> ${req.session.prix} <br>
            <b>frome:</b> ${req.session.frome} <br>
            <b>to:</b> ${req.session.to} <br>
            
            <b>nom:</b> ${req.session.nom} <br>
            <b>prenome:</b> ${req.session.prenom} <br>
            <b>email:</b> ${req.session.email} <br>
            <b>numero de telephone:</b> ${req.session.phone} <br>`
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

main().catch(console.error);

var data = `
RESERVATION DETAIL
<b>date de depart: ${req.session.dipartTime}
prix: ${req.session.prix}
frome: ${req.session.frome}
to: ${req.session.to}

nom: ${req.session.nom}
prenome: ${req.session.prenom}
email: ${req.session.email}
numero de telephone: ${req.session.phone}`;

fs.writeFile("temp.txt", data, (err) => {
  if (err) console.log(err);
  console.log("Successfully Written to File.");
});

    res.render('sucess');
});

module.exports = router;


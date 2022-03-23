const functions = require("firebase-functions");
const nodemailer = require("nodemailer");
const cors = require("cors")({ origin: true });

/**  * using gmail with nodemailer  */

let transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "adeoluwaagbakosi@gmail.com",
    pass: "*****",
  },
});

exports.sendMail = functions.https.onRequest((req, res) => {
  cors(req, res, () => {
    // getting dest email by query string
    const title = req.query.title;
    const message = req.query.message;
    const mailOptions = {
      from: "AdultLife App",
      to: "adeoluwaagbakosi@gmail.com",
      subject: "Alert!: New Report", // email subject
      html:
        `           
          <div>             
            From:` +
                title +
                  `<br /><br />            
            Message:` +
                message +
        	  `<br /><br />           
	  </div>           
	`, // email content in HTML
    };
    // returning result
    return transporter.sendMail(mailOptions, (erro, info) => {
      if (erro) {
        return res.send(erro.toString());
      }
      return res.send("Message Sent");
    });
  });
});

const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require("dotenv").config();

// instantiate an express app
const app = express();

// cors
app.use(cors({ origin: "*" }));

// connect to static files
app.use("/public", express.static(__dirname + "/public"));

const transporter = nodemailer.createTransport({
    host: process.env.HOST,
    port: 465,
    secure: true,
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
    },
});

// verify connection configuration
transporter.verify((error, success) => {
    if (error) {
        console.log(error);
    } else {
        console.log("Server is ready to take our messages");
    }
});

// make the contact page the the first page on the app
app.route("/").get(function (req, res) {
    res.sendFile(__dirname + "/public/index.html");
});

app.post('/send', (req, res, next) => {
    var name = req.body.name;
    var email = req.body.email;
    var subject = req.body.subject;
    var message = req.body.message;

    var mail = {
        from: name,
        to: email,
        subject: subject,
        text: message
    }

    transporter.sendMail(mail, (err, data) => {
        if (err) {
            res.json({
                status: 'fail'
            })
        } else {
            res.json({
                status: 'success'
            })
        }
    })
})


// port will be 5000 for testing
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
});
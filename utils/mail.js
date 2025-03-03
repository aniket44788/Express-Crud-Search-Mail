const nodemailer = require("nodemailer");



const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, 
  auth: {
    user: process.env.NODE_EMAIL,
    pass: process.env.NODE_PASS,
  },
});
 module.exports = transporter

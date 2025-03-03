const express = require("express");
const create = express.Router();
const schema = require("../Schema-Model/Schema");
const transporter = require("../utils/mail");
create.post("/", async (req, res) => {
  try {
    const { name, last, email, phone, age, gender } = req.body;
    if (!name || !last || !email || !phone || !age || !gender) {
      return res.status(500).json({
        message: " All fields required",
      });
    }
    const existuser = await schema.find({
      $or: [{ email: email }, { phone: phone }],
    });
    if (existuser.lenght > 0) {
      return res.status(409).json({
        message: " Email or Phone is already exist.",
      });
    }
    const userdata = new schema({
      name,
      last,
      email,
      phone,
      age,
      gender,
    });
    const saveuser = await userdata.save();
    return res.status(201).json({
      message: "Signup Successfull.",
      data: saveuser,
    });
  } catch (error) {
    return res.status(500).json({
      message: "data not saved ",
    });
  }
});

create.post("/mail", async (req, res) => {
  try {
    const { email, name, sub, msg } = req.body;
    const info = await transporter.sendMail({
      from: email,
      to: process.env.NODE_EMAIL,
      subject: sub,
      text: msg,

    });
    return res.status(200).json({msg:"Message sent: %s", data:info.messageId});
  } catch (error) {
    return res.status(500).json({
      message: "internal server problem",
    });
  }
});
module.exports = create;

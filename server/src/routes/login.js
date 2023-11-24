var express = require('express');
require('dotenv').config();
var router = express.Router();
const bcrypt = require('bcrypt');
const User = require(__dirname + '/../models/User');
const OtpModel = require(__dirname + '/../models/Otp');
const {maxAge,createToken} = require('../middlewares/authController');
const {generateOTP} = require(__dirname + '/../middlewares/otp');
const nodemailer = require('nodemailer');

router.post('/loginUser', async (req, res) => {
  console.log(req.body);
  try {
    // const username = 'raghav'
    // const password = '1234'
    const {email, password} = req.body;
    //find user by username and get password
    const pass = await User.findOne({ email: email }, { password: 1 });
    if (pass) {
      const passwordMatches = bcrypt.compareSync(password, pass.password);

      if (passwordMatches) {
        const userDetails = await User.findOne({email: email},{email:1});
        const token = createToken(userDetails._id);
        res.cookie('jwt',token,{httpOnly:true,maxAge:maxAge * 1000,secure: true,SameSite:'none'});
        res.json({ status: 'ok',token, user: 'user',userDetails: userDetails._id});
      }
      else {
        console.log('invalid password');
        return res.json({ status: 'error', user: 'invalid password' });
      }
    }
    else {
      console.log('invalid username');
      return res.json({ status: 'error', user: 'invalid username' });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal server error' });
  }
});


let otp;

router.post('/reset-password', async (req, res) => {
  try {
    const { email } = req.body;
    console.log(email);
    otp = generateOTP();

    const otpsend = await OtpModel.findOneAndUpdate({email:email},{otp:otp});
    //const email ='harivhari2020@gmail.com';
    // Create a Nodemailer transporter using Gmail's SMTP server
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      //host: 'smtp.gmail.com',
      //port: 465,
      //secure: true,
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD
      },
    });

    // Send the email
    await transporter.sendMail({
      from: process.env.EMAIL_USERNAME,
      to: email,
      subject: 'OTP for forgot-password confirmation',
      text: otp,
    });

    res.status(200).json({ message: 'Email sent successfully' });

    const otpDoc = await OtpModel.findOne({ email });
    
    if (otpDoc) {
      otpDoc.otp = otp;
      await otpDoc.save();
    } else {
      // If the email doesn't exist, create a new document
      await OtpModel.create({ email, otp });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to send email' });
  }
});


router.post('/confirm-otp',async (req,res)=>{
  const { email,otpNumber } = req.body;
  console.log(email,otpNumber);
  const expectedOtp = await OtpModel.findOne({email:email});
  if(otpNumber === expectedOtp.otp) {
    console.log("otp confirmed");
    return res.json({status:'ok'});
  }
  else{
    return res.json({status:'error'});
  }
});
router.delete('/logout', (req, res) => {
  // Clear cookies
  res.clearCookie('jwt');
  res.json({ status: 'ok', message: 'Logout successful' });
});

module.exports = router;


module.exports = router;

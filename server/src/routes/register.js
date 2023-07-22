var express = require('express');
require('dotenv').config();
var router = express.Router();
const User = require(__dirname + '/../models/User');
//const ServiceProvider = require(__dirname + '/../models/ServiceProvider');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const handleErrors = (err) =>{
  console.log(err.message,err.code);
  let errors = {username:'',email:'',password:''};

  if(err.message.includes('User validation failed')) {
    Object.values(err.errors).forEach(({properties}) => {
      errors[properties.path] = properties.message;
    });
    // Object.keys(err.errors).forEach(({properties}) => {
    //   error[properties.path] = properties.message;
    // });
  }
  return errors;
};

router.post('/registerUser', async (req, res) => {
  try {
    const {username, email, password} = req.body;
    console.log(req.body);
    // check if the user is already present
    const isPresent = await User.findOne({ username: username});
    if (isPresent) {
      console.log('User already present');
    }
    else {
      //const passwordCrypted = bcrypt.hashSync(password, saltRounds);
      const newUser = await User.create({ username: username, email: email, password: password});
      if (newUser) {
        console.log('User created successfully');
        return res.json({status:'ok'});
      }
    }
  }
  catch (err) {
    const errors = handleErrors(err);
    res.status(400).json(errors);
  }
});

// router.post('/registerServiceProvider', async (req, res) => {
//   console.log(req.body);
//   try {
//     // const username = 'windows'
//     // const companyName = 'Microsoft'
//     // const email = 'microsoft@outlook.com'
//     // const password = '1234'
//     const {username, companyName, email, password} = req.body;
//     // check if the service Provider is already present
//     const isPresent = await ServiceProvider.findOne({ _id: username });
//     if (isPresent) {
//       console.log("Service Provider already present");
//     }
//     else {
//       const passwordCrypted = bcrypt.hashSync(password, saltRounds);
//       const newUser = await ServiceProvider.create({ _id: username, email: email, password: passwordCrypted, companyName: companyName });
//       if (newUser) {
//         console.log("Service provider created successfully");
//         return res.json({status:'ok'});
//       }
//     }
//   } catch (error) {
//     console.error(error);
//     return res.status(500).json({ error: 'Internal server error' });
//   }
// });

module.exports = router;

var express = require('express');
require('dotenv').config();
var router = express.Router();
const bcrypt = require('bcrypt');
const User = require(__dirname + '/../models/User');

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
        const userDetails = await User.find({email: email},{email:1});
        return res.json({ status: 'ok', user: 'user',userDetails: userDetails});
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

// router.post('/loginServiceProvider', async (req, res) => {
//   console.log(req.body);
//   try {
//     // const username = 'windows'
//     // const password = '1234'
//     const {username, password} = req.body;
//     //find user by username and get password
//     const pass = await ServiceProvider.findOne({ _id: username }, { password: 1 });
//     if (pass) {
//       const passwordMatches = bcrypt.compareSync(password, pass.password);

//       if (passwordMatches) {
//         const provideDetails = await ServiceProvider.findOne({ _id: username},{companyName:1,email:1});
//         return res.json({ status: 'ok', user: 'serviceProvider',provideDetails:provideDetails });
//       }
//       else {
//         console.log('invalid password');
//         return res.json({ status: 'error', user: 'invalid password' });
//       }
//     }
//     else {
//       console.log('invalid username');
//       return res.json({ status: 'error', user: 'invalid username' });
//     }
//   } catch (error) {
//     console.error(error);
//     return res.status(500).json({ error: 'Internal server error' });
//   }
// });

module.exports = router;

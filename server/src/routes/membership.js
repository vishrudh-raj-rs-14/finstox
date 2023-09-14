var express = require('express');
var router = express.Router();
const User = require(__dirname + "/../models/User");

/* GET home page. */
router.post('/membership', async (req, res)=> {
  const {email} = req.body;
  try {
    // Assuming you have a User model and want to find the user by email
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    const membership = user.membership;
    res.json(membership);
  } catch (error) {
    console.error('Error checking membership:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
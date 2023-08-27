var express = require('express');
var router = express.Router();
const User = require(__dirname + '/../models/User');

router.post('/practice', async (req, res) => {
  const { email, symbol, orderType, amount, currentValue } = req.body;
  console.log(req.body);

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    user.practiceHistory.push({
      symbol,
      orderType,
      amount,
      currentValue,
    });
    const updatedAmountLeft = user.amountLeft - amount;
    if (updatedAmountLeft < 0) {
      return res.status(400).json({ error: 'Insufficient funds' });
    }
    user.amountLeft = updatedAmountLeft;
    await user.save();

    res.json({ message: 'Order data received and saved successfully.' });
  } catch (error) {
    console.error('Error handling practice order:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;

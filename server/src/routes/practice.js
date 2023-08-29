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
    if (orderType === 'buy') {
      const updatedAmountLeft = user.amountLeft - amount;
      if (updatedAmountLeft < 0) {
        return res.status(400).json({ error: 'Insufficient funds' });
      }
      user.amountLeft = updatedAmountLeft;

      const symbolStockEntry = user.symbolStock.find(entry => entry.symbol === symbol);
      if (symbolStockEntry) {
        symbolStockEntry.stockLeft = (symbolStockEntry.stockLeft || 0) + amount / currentValue;
      } else {
        user.symbolStock.push({
          symbol,
          stockLeft: amount / currentValue,
        });
      }
    }
    if(orderType === 'sell') {
      const symbolStockEntry = user.symbolStock.find(entry => entry.symbol === symbol);
      if(!symbolStockEntry) {
        return res.status(400).json({ error: 'No stock available' });
      }
      else if(amount > symbolStockEntry.stockLeft) {
        return res.status(400).json({ error: 'Insufficient stock'});
      }
      else{
        symbolStockEntry.stockLeft = symbolStockEntry.stockLeft - amount;
      }
      const updatedAmountLeft = user.amountLeft + (amount * currentValue);
      user.amountLeft = updatedAmountLeft;
    }
    await user.save();

    res.json({ message: 'Order data received and saved successfully.' });
  } catch (error) {
    console.error('Error handling practice order:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

router.post('/practiceHistory', async (req, res) => {
  const email = req.body.email;
  try {
    const user = await User.findOne({ email }); // Find the user by email
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    
    // Get the last six practice history entries
    const lastSixPracticeHistory = user.practiceHistory.slice(-6).reverse();
    res.status(200).json(lastSixPracticeHistory);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;

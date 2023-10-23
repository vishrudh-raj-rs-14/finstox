var express = require("express");
var router = express.Router();
const User = require(__dirname + "/../models/User");

router.post("/practiceBuy", async (req, res) => {
  const { email, symbol, orderType, amount, currentValue, journal } = req.body;
  console.log(req.body);
  const stock = parseFloat((amount / currentValue).toFixed(2));
  const stockLeft = stock;
  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    user.practiceHistory.push({
      symbol,
      orderType,
      amount,
      stock,
      currentValue,
      stockLeft,
      journal,
    });
    const updatedAmountLeft = user.amountLeft - amount;
    if (updatedAmountLeft < 0) {
      return res.status(400).json({ error: "Insufficient funds" });
    }
    user.amountLeft = updatedAmountLeft;

    const symbolStockEntry = user.symbolStock.find(
      (entry) => entry.symbol === symbol
    );
    if (symbolStockEntry) {
      symbolStockEntry.stockLeft = parseFloat(((symbolStockEntry.stockLeft || 0) + amount / currentValue).toFixed(2));
    } else {
      user.symbolStock.push({
        symbol,
        stockLeft: parseFloat((amount / currentValue).toFixed(2)),
      });
    }
    await user.save();

    res.json({ message: "Order data received and saved successfully." });
  } catch (error) {
    console.error("Error handling practice order:", error);
    res.status(500).json({ error: "Server error" });
  }
});

router.post("/practiceSell", async (req, res) => {
  const { email, symbol, orderType, stock, currentValue, journal } = req.body;
  console.log(req.body);
  const amount = parseFloat((stock * currentValue).toFixed(2));
  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const symbolStockEntry = user.symbolStock.find(
      (entry) => entry.symbol === symbol
    );
    if (!symbolStockEntry) {
      return res.status(400).json({ error: "No stock available" });
    } else if (stock > symbolStockEntry.stockLeft) {
      return res.status(400).json({ error: "Insufficient stock" });
    } else {
      symbolStockEntry.stockLeft = symbolStockEntry.stockLeft - stock;
    }

    // Calculate profit and update stock and stockLeft
    let remainingStockToSell = stock;
    let totalProfit = 0;
    let totalroi = 0;
    for (const transaction of user.practiceHistory) {
      if (remainingStockToSell <= 0) {
        break; // All stocks are sold
      }

      if (transaction.symbol === symbol && transaction.orderType === "Buy") {
        const marketPriceBuy = transaction.currentValue;

        const sellAmount = Math.min(
          remainingStockToSell,
          transaction.stockLeft
        );

        if (sellAmount > 0) {
          const profit = (currentValue - marketPriceBuy) * sellAmount;
          console.log(profit, marketPriceBuy, sellAmount);
          const returns = (profit * 100) / (marketPriceBuy * sellAmount);
          console.log(returns);
    
          // Update stockLeft and totalProfit
          if (!isNaN(returns)) {
            // Update stockLeft and totalProfit
            transaction.stockLeft -= sellAmount;
            totalProfit += profit;
            totalroi += returns;
    
            // Update remainingStockToSell
            remainingStockToSell -= sellAmount;
          } else {
            console.error("Invalid ROI calculation");
            return res.status(400).json({ error: "Invalid ROI calculation" });
          }
        }
      }
    }
    const profitSell = parseFloat((totalProfit).toFixed(2));
    const roi = totalroi;
    user.practiceHistory.push({
      symbol,
      orderType,
      amount,
      stock,
      currentValue,
      profitSell,
      roi,
      journal,
    });

    const updatedAmountLeft = user.amountLeft + stock * currentValue;
    user.amountLeft = updatedAmountLeft;

    await user.save();

    res.json({ message: "Order data received and saved successfully." });
  } catch (error) {
    console.error("Error handling practice order:", error);
    res.status(500).json({ error: "Server error" });
  }
});

router.post("/practiceHistory", async (req, res) => {
  const email = req.body.email;
  try {
    const user = await User.findOne({ email }); // Find the user by email
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Get the last six practice history entries
    const lastSixPracticeHistory = user.practiceHistory.reverse();
    res.status(200).json(lastSixPracticeHistory);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;

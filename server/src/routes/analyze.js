const express = require("express");
const router = express.Router();
const User = require(__dirname + "/../models/User");

router.post("/getAnalysis", async (req, res) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Initialize the result array
    const analysisResults = [];

    // Group practiceHistory by date
    const groupedByDate = user.practiceHistory.reduce((acc, trade) => {
      const date = trade.createdAt.toISOString().split('T')[0];

      if (!acc[date]) {
        acc[date] = [];
      }

      acc[date].push(trade);

      return acc;
    }, {});

    // Calculate values for each date
    for (const date in groupedByDate) {
      const trades = groupedByDate[date];
      const successTrades = trades.filter((trade) => trade.orderType === "Sell" && trade.profitSell > 0);
      const lossTrades = trades.filter((trade) => trade.orderType === "Sell" && trade.profitSell < 0);

      const successRate = trades.length > 0 ? successTrades.length / trades.length : 0;

      // Calculate profit percentage and loss percentage
      const profitPercentage = successTrades.length > 0 ? successTrades.reduce((sum, trade) => sum + (trade.profitSell / trade.amount || 0), 0) * 100 : 0;
      const lossPercentage = lossTrades.length > 0 ? lossTrades.reduce((sum, trade) => sum + (trade.profitSell / trade.amount || 0), 0) * 100 : 0;

      const netPercentage = profitPercentage + lossPercentage;

      // Calculate Avg.Win and Avg.Loss
      const avgWin = successTrades.length > 0 ? successTrades.reduce((sum, trade) => sum + (trade.profitSell / trade.amount || 0), 0) / successTrades.length : 0;
      const avgLoss = lossTrades.length > 0 ? lossTrades.reduce((sum, trade) => sum + (trade.profitSell / trade.amount || 0), 0) / lossTrades.length : 0;

      // Calculate WL (Win/Loss ratio)
      const winLossRatio = avgLoss !== 0 ? avgWin / Math.abs(avgLoss) : 0;

      // Group successTrades by symbol
      const successTradesBySymbol = successTrades.reduce((acc, trade) => {
        if (!acc[trade.symbol]) {
          acc[trade.symbol] = [];
        }

        acc[trade.symbol].push(trade);

        return acc;
      }, {});

      // Group lossTrades by symbol
      const lossTradesBySymbol = lossTrades.reduce((acc, trade) => {
        if (!acc[trade.symbol]) {
          acc[trade.symbol] = [];
        }

        acc[trade.symbol].push(trade);

        return acc;
      }, {});


      analysisResults.push({
        date,
        successRate: parseFloat((successRate * 100).toFixed(2)),
        profitPercentage: parseFloat(profitPercentage.toFixed(2)),
        lossPercentage: parseFloat(lossPercentage.toFixed(2)),
        netPercentage: parseFloat(netPercentage.toFixed(2)),
        avgWin: parseFloat(avgWin.toFixed(6)),
        avgLoss: parseFloat(avgLoss.toFixed(6)),
        winLossRatio: parseFloat(winLossRatio.toFixed(2)),
        //netPercentageBySymbol,
      });
    }

    return res.status(200).json(analysisResults);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;

var express = require("express");
var router = express.Router();
const { requireAuth } = require("../middlewares/authController");
const User = require(__dirname + "/../models/User");

/* GET home page. */
router.get("/checkAuthentication", requireAuth, (req, res) => {
  res.json({ status: "ok" });
});

//return stock available
router.post("/getStocks", async (req, res) => {
  try {
    const { email } = req.body; // Get the email from the request body
    const user = await User.findOne({ email }, "symbolStock"); // Find the user by email and retrieve their symbolStock
    if (!user) {
      return res.status(404).json({ error: "User not found." });
    }
    const symbolStock = user.symbolStock;
    res.status(200).json(symbolStock);
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while fetching symbolStock." });
  }
});

router.post("/sellProfits", async (req, res) => {
  const { email } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Filter practiceHistory objects with orderType === "Sell"
    const sellProfits = user.practiceHistory.filter(
      (transaction) => transaction.orderType === "Sell"
    ).slice(-6).reverse();

    res.json(sellProfits);
  } catch (error) {
    console.error("Error fetching sell profits:", error);
    res.status(500).json({ error: "Server error" });
  }
});

router.post("/getTotalProfit", async (req, res) => {
  const { email } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Filter practiceHistory objects with orderType === "Sell"
    const sellProfits = user.practiceHistory.filter(
      (transaction) => transaction.orderType === "Sell"
    );

    // Calculate the total profit by summing up profitSell values
    const totalProfit = sellProfits.reduce(
      (total, transaction) => total + transaction.profitSell,
      0
    );
    
    const roundedtotalProfit = parseFloat(totalProfit.toFixed(2));
    
    user.totalProfit = roundedtotalProfit;
    await user.save();

    res.json(roundedtotalProfit); // Respond with the total profit as JSON
  } catch (error) {
    console.error("Error fetching total profit:", error);
    res.status(500).json({ error: "Server error" });
  }
});

router.post("/getSuccess", async (req, res) => {
  const { email } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const sellProfits = user.practiceHistory.filter(
      (transaction) => transaction.orderType === "Sell" && transaction.profitSell > 0
    );

    const totalSellProfits = sellProfits.length;
    const totalSellTransactions = user.practiceHistory.filter(
      (transaction) => transaction.orderType === "Sell"
    ).length;
    const successPercentage = totalSellTransactions > 0 ? (totalSellProfits / totalSellTransactions) * 100 : 0;
    const roundedsuccess = parseFloat(successPercentage.toFixed(4));

    
    user.totalSuccessRate = roundedsuccess;
    await user.save();

    res.status(200).json(roundedsuccess);
   
  } catch (error) {
    console.error("Error fetching success percentage:", error);
    res.status(500).json({ error: "Server error" });
  }
});


router.post('/getTotalReturns', async (req,res)=>{
  const { email } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    const sellRoi = user.practiceHistory.filter(
      (transaction) => transaction.orderType === "Sell"
    );

    // Calculate the total profit by summing up profitSell values
    const totalRoi = sellRoi.reduce(
      (total, transaction) => total + transaction.roi,
      0
    );
    const roundedtotalRoi = parseFloat(totalRoi.toFixed(4));

    user.totalRoi = roundedtotalRoi;
    await user.save();

    res.json(roundedtotalRoi);
   
  } catch (error) {
    console.error("Error fetching total profit:", error);
    res.status(500).json({ error: "Server error" });
  }
});

router.post('/getScore', async (req,res)=>{
  const { email } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    const score = user.totalRoi + user.totalSuccessRate;

    user.score = score;
    await user.save();

    res.json(score);
   
  } catch (error) {
    console.error("Error fetching total profit:", error);
    res.status(500).json({ error: "Server error" });
  }
});

router.post('/getTradesDay', async (req, res) => {
  const { email } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Calculate the number of trades for the last 7 days
    const currentDate = new Date();
    const sevenDaysAgo = new Date(currentDate);
    sevenDaysAgo.setDate(currentDate.getDate() - 6); // Go back 6 days, including today

    const tradeCounts = [];
    const labels = [];
    for (let i = 0; i < 7; i++) {
      const date = new Date(sevenDaysAgo);
      date.setDate(sevenDaysAgo.getDate() + i); // Increment date for each day

      const trades = user.practiceHistory.filter((trade) => {
        const tradeDate = new Date(trade.createdAt);
        return tradeDate.toDateString() === date.toDateString();
      });

      tradeCounts.push(trades.length);
      labels.push(date.getDate()); // Get only the day of the month
    }

    // Construct the graph data
    const graphData = {
      labels,
      datasets:
        {
          label: "Trades",
          data: tradeCounts,
        },
    };

    res.status(200).json(graphData);
  } catch (error) {
    console.error("Error fetching trade data:", error);
    res.status(500).json({ error: "Server error" });
  }
});




module.exports = router;

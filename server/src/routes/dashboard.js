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
    );

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

    const successPercentage = (totalSellProfits / totalSellTransactions) * 100;
    const roundedsuccess = parseFloat(successPercentage.toFixed(4));


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

    res.json(roundedtotalRoi);
   
  } catch (error) {
    console.error("Error fetching total profit:", error);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;

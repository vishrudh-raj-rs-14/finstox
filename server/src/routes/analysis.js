const express = require("express");
const router = express.Router();
const User = require(__dirname + "/../models/User");

router.post("/getWinAnalyse", async (req, res) => {
  try {
    // Fetch the user by their username
    const { email } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const winAnalysis = [];

    // Iterate through the practiceHistory to find profitable sell orders
    for (let i = 0; i < user.practiceHistory.length; i++) {
      if (
        user.practiceHistory[i].orderType === "Sell" &&
        user.practiceHistory[i].profitSell > 0
      ) {
        // Find the corresponding buy order
        for (let j = i - 1; j >= 0; j--) {
          if (
            user.practiceHistory[j].orderType === "Buy" &&
            user.practiceHistory[j].symbol === user.practiceHistory[i].symbol
          ) {
            const timeDiffInSeconds =
              (user.practiceHistory[i].createdAt -
                user.practiceHistory[j].createdAt) /
              1000;
            const days = Math.floor(timeDiffInSeconds / (60 * 60 * 24));
            const hours = Math.floor(
              (timeDiffInSeconds % (60 * 60 * 24)) / (60 * 60)
            );
            const minutes = Math.floor((timeDiffInSeconds % (60 * 60)) / 60);
            const seconds = Math.floor(timeDiffInSeconds % 60);
            const holdingTime = `${days}d:${hours}h:${minutes}m:${seconds}s`;

            const winAnalysisItem = {
              profit: user.practiceHistory[i].profitSell,
              strategy: user.practiceHistory[j].journal.strategy,
              holdingTime,
            };
            winAnalysis.push(winAnalysisItem);
            break; // Move on to the next sell order
          }
        }
      }
    }

    return res.json(winAnalysis);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Server error" });
  }
});

router.post("/getLossAnalyse", async (req, res) => {
  try {
    // Fetch the user by their username
    const { email } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const winAnalysis = [];

    // Iterate through the practiceHistory to find profitable sell orders
    for (let i = 0; i < user.practiceHistory.length; i++) {
      if (
        user.practiceHistory[i].orderType === "Sell" &&
        user.practiceHistory[i].profitSell < 0
      ) {
        // Find the corresponding buy order
        for (let j = i - 1; j >= 0; j--) {
          if (
            user.practiceHistory[j].orderType === "Buy" &&
            user.practiceHistory[j].symbol === user.practiceHistory[i].symbol
          ) {
            const timeDiffInSeconds =
              (user.practiceHistory[i].createdAt -
                user.practiceHistory[j].createdAt) /
              1000;
            const days = Math.floor(timeDiffInSeconds / (60 * 60 * 24));
            const hours = Math.floor(
              (timeDiffInSeconds % (60 * 60 * 24)) / (60 * 60)
            );
            const minutes = Math.floor((timeDiffInSeconds % (60 * 60)) / 60);
            const seconds = Math.floor(timeDiffInSeconds % 60);
            const holdingTime = `${days}d:${hours}h:${minutes}m:${seconds}s`;

            const winAnalysisItem = {
              profit: user.practiceHistory[i].profitSell,
              strategy: user.practiceHistory[j].journal.strategy,
              holdingTime,
            };
            winAnalysis.push(winAnalysisItem);
            break; // Move on to the next sell order
          }
        }
      }
    }

    return res.json(winAnalysis);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;

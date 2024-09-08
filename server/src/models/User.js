const mongoose = require("mongoose");
const { isEmail } = require("validator");
const bcrypt = require("bcrypt");

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "please enter a username"],
    unique: true,
  },
  email: {
    type: String,
    required: true,
    //unique: true,
    lowercase: true,
    validate: [isEmail, "Please enter a valid email"],
  },
  password: {
    type: String,
    required: [true, "please enter a password"],
    minlength: [6, "minimum length of password is 6 characters"],
  },
  ranking: {
    type: Number,
    required: false,
  },
  membership: {
    type: Number,
    default: 0,
  },
  totalRoi: {
    type: Number,
    default: 0,
  },
  totalSuccessRate: {
    type: Number,
    default: 0,
  },
  totalProfit: {
    type: Number,
    default: 0,
  },
  score: {
    type: Number,
    default: 0,
  },
  amountLeft: {
    type: Number,
    required: true,
    default: 1000000,
  },
  symbolStock: [
    {
      symbol: {
        type: String,
        required: true,
      },
      stockLeft: {
        type: Number,
        required: true,
        default: 0,
      },
    },
  ],
  practiceHistory: [
    {
      symbol: {
        type: String,
        required: true,
      },
      orderType: {
        type: String,
        required: true,
      },
      amount: {
        type: Number,
        required: false,
      },
      stock: {
        type: Number,
        required: false,
      },
      currentValue: {
        type: Number,
        required: true,
      },
      stockLeft: {
        type: Number, // Added to track remaining stock
        required: function () {
          return this.orderType === "Buy"; // Not required for Sell orders
        },
      },
      closed: {
        type: Boolean,
        default: false,
      },
      profitSell: {
        type: Number, // Added to track remaining stock
        required: function () {
          return this.orderType === "Sell"; // Not required for Buy orders
        },
        defualt: 0,
      },
      roi: {
        type: Number, // Added to track remaining stock
        required: function () {
          return this.orderType === "Sell"; // Not required for Buy orders
        },
        defualt: 0,
      },
      createdAt: {
        type: Date,
        default: Date.now, // Set to the current date and time when a new object is added
      },
      journal: {
        orderType: {
          type: String,
        },
        entryPrice: {
          type: String,
          required: function () {
            return this.parent().orderType === "Buy";
          },
        },
        entryTime: {
          type: String,
          required: function () {
            return this.parent().orderType === "Buy";
          },
        },
        strategy: {
          type: String,
          required: function () {
            return this.parent().orderType === "Buy";
          },
        },
        timeFrame: {
          type: String,
          required: function () {
            return this.parent().orderType === "Buy";
          },
        },
        indicator: {
          type: String,
          required: function () {
            return this.parent().orderType === "Buy";
          },
        },
        chartPattern: {
          type: String,
          required: function () {
            return this.parent().orderType === "Buy";
          },
        },
        reasonTrade: {
          type: String,
          required: function () {
            return this.parent().orderType === "Buy";
          },
        },
        exitPrice: {
          type: String,
          required: function () {
            return this.parent().orderType === "Sell";
          },

        },
        exitTime: {
          type: String,
          required: function () {
            return this.parent().orderType === "Sell";
          },

        },
      },
    },
  ],
});
UserSchema.pre("save", async function (next) {
  if (this.isNew) {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
  }
  next();
});
module.exports = new mongoose.model("User", UserSchema);

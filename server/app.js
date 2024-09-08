const express = require("express");
const mongoose = require("./src/config/mongoose");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const PORT = process.env.PORT || 5500;
const bodyParser = require("body-parser");
//middlewares
app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
//app.use(require('./middlewares/auth'));
//routes
app.use(require("./src/routes/index"));
app.use(require("./src/routes/register"));
app.use(require("./src/routes/login"));
app.use(require("./src/routes/dashboard"));
app.use(require("./src/routes/practice"));
app.use(require("./src/routes/membership"));
app.use(require("./src/routes/payment"));
app.use(require("./src/routes/analysis"));
app.use(require("./src/routes/analyze"));
app.use(require("./src/routes/stripe"));
app.use(require("./src/routes/resetPassword"));

app.listen(PORT, () => {
  console.log(`Server Started at Port ${PORT}`);
});

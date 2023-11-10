const express = require('express');
const mongoose = require('./config/mongoose');
const app = express();
const cors = require('cors');
const cookieParser = require('cookie-parser');
const PORT = process.env.PORT || 4337;
const bodyParser = require('body-parser');
//middlewares
app.use(cors({origin: 'http://localhost:3000',credentials:true}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
//app.use(require('./middlewares/auth'));
//routes
app.use(require('./routes/index'));
app.use(require('./routes/register'));
app.use(require('./routes/login'));
app.use(require('./routes/dashboard'));
app.use(require('./routes/practice'));
app.use(require('./routes/membership'));
app.use(require('./routes/payment'));
app.use(require('./routes/analysis'));
app.use(require('./routes/analyze'));
app.use(require('./routes/stripe'));

app.listen(PORT, () => {
  console.log(`Server Started at Port ${PORT}`);
});

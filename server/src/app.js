const express = require('express');
const mongoose = require('./config/mongoose');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 4337;
//middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//app.use(require('./middlewares/auth'));
//routes
app.use(require('./routes/index'));
app.use(require('./routes/register'));
app.use(require('./routes/login'));

app.listen(PORT, () => {
  console.log(`Server Started at Port ${PORT}`);
});

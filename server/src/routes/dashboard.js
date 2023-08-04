var express = require('express');
var router = express.Router();
const {requireAuth} = require('../middlewares/authController');

/* GET home page. */
router.get('/checkAuthentication',requireAuth, (req, res)=> {
  res.json({status:'ok'});
});

module.exports = router;
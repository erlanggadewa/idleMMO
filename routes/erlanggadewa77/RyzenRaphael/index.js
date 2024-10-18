var express = require('express');
const switchRaphael = require('./switch');
const miningRaphael = require('./mining');


var router = express.Router();

/* GET home page. */
router.get('/mining', async function (req, res, next) {
  try {

    const switchAcc = await switchRaphael();

    const reset = await miningRaphael();

    if (!switchAcc.ok || !reset.ok)
      throw new Error("RyzenRaphael mining failed");



    return res.json({ message: '@RyzenRaphael Success reset mining time' });
  } catch (error) {
    throw error;
  }
});


module.exports = router;

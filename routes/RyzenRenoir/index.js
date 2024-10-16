var express = require('express');
const switchRyzen = require('./switch');
const miningRyzen = require('./mining');


var router = express.Router();

/* GET home page. */
router.get('/mining', async function (req, res, next) {
  try {

    const switchAcc = await switchRyzen();

    const reset = await miningRyzen();

    if (!switchAcc.ok || !reset.ok)
      throw new Error("RyzenRenoir mining failed");



    return res.json({ message: '@RyzenRenoir Success reset mining time' });
  } catch (error) {
    throw error;
  }
});


module.exports = router;

var express = require('express');
const switchRaptor = require('./switch');
const miningRaptor = require('./mining');
const woodRaptor = require('./wood');


var router = express.Router();

/* GET home page. */
router.get('/mining', async function (req, res, next) {
  try {

    const switchAcc = await switchRaptor();

    const reset = await miningRaptor();

    if (!switchAcc.ok || !reset.ok)
      throw new Error("RaptorLake mining failed");



    return res.json({ message: '@RaptorLake Success reset mining time' });
  } catch (error) {
    throw error;
  }
});

/* GET home page. */
router.get('/wood', async function (req, res, next) {
  try {

    const switchAcc = await switchRaptor();

    const reset = await woodRaptor();

    if (!switchAcc.ok || !reset.ok)
      throw new Error("RaptorLake woodcutting failed");



    return res.json({ message: '@RaptorLake Success reset woodcutting time' });
  } catch (error) {
    throw error;
  }
});


module.exports = router;

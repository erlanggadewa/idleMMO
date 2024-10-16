var express = require('express');
const miningHacker = require('./mining');
const switchHacker = require('./switch');
const expeditionHacker = require('./expedition');


var router = express.Router();



router.get('/mining', async function (req, res, next) {

  try {

    const switchAcc = await switchHacker();

    const reset = await miningHacker();

    if (!switchAcc.ok || !reset.ok)
      throw new Error("HackerInside mining failed");



    return res.json({ message: '@HackerInside Success reset mining time' });
  } catch (error) {
    throw error;
  }
});

router.get('/expedition', async function (req, res, next) {
  try {
    const switchAcc = await switchHacker();

    const reset = await expeditionHacker();

    if (!switchAcc.ok || !reset.ok)
      throw new Error("HackerInside expedition failed");

    return res.json({ message: '@HackerInside Success reset expedition time' });
  } catch (error) {
    throw error;
  }
});

module.exports = router;

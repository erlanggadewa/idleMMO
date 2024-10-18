var express = require('express');
const switchPhoenix = require('./switch');
const miningPhoenix = require('./mining');
const woodPhoenix = require('./wood');


var router = express.Router();

/* GET home page. */
router.get('/mining', async function (req, res, next) {
  try {

    const switchAcc = await switchPhoenix();

    const reset = await miningPhoenix();

    if (!switchAcc.ok || !reset.ok)
      throw new Error("RyzenPhoenix mining failed");



    return res.json({ message: '@RyzenPhoenix Success reset mining time' });
  } catch (error) {
    throw error;
  }
});

/* GET home page. */
router.get('/wood', async function (req, res, next) {
  try {

    const switchAcc = await switchPhoenix();

    const reset = await woodPhoenix();

    if (!switchAcc.ok || !reset.ok)
      throw new Error("RyzenPhoenix woodcutting failed");



    return res.json({ message: '@RyzenPhoenix Success reset woodcutting time' });
  } catch (error) {
    throw error;
  }
});


module.exports = router;

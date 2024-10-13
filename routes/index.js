var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/@RyzenRenoir', async function (req, res, next) {
  try {

    const switchAcc = await fetch("https://web.idle-mmo.com/user/character/switch/367161", {
      "headers": {
        "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
        "accept-language": "id,en-US;q=0.9,en;q=0.8",
        "cache-control": "max-age=0",
        "content-type": "application/x-www-form-urlencoded",
        "priority": "u=0, i",
        "sec-ch-ua": "\"Microsoft Edge\";v=\"129\", \"Not=A?Brand\";v=\"8\", \"Chromium\";v=\"129\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"Windows\"",
        "sec-fetch-dest": "document",
        "sec-fetch-mode": "navigate",
        "sec-fetch-site": "same-origin",
        "sec-fetch-user": "?1",
        "upgrade-insecure-requests": "1"
      },
      "referrer": "https://web.idle-mmo.com/inventory",
      "referrerPolicy": "strict-origin-when-cross-origin",
      "body": "_token=Fv9WeJkbTXRTj0duCvp8o2w5cx9BYjic9YuXD7TX",
      "method": "POST",
      "mode": "cors",
      "credentials": "include"
    });


    if (!switchAcc.ok) {
      throw new Error(`Failed to switch account, ${error}`);
    }

    const reset = await fetch("https://web.idle-mmo.com/api/skills/start?expires=1728907338&signature=a221d70c525e98a62f14bc21abf4af5589d14a666936c0e57f3c0c7c57c7a743", {
      "headers": {
        "accept": "application/json",
        "accept-language": "id,en-US;q=0.9,en;q=0.8",
        "authorization": "Bearer zPJOb3TsnbVqMLW9kdnMu7Xld4GHIJrb1u4uhfRul8FuIGv5HNW6Lwg4hUkI",
        "content-type": "application/json",
        "priority": "u=1, i",
        "sec-ch-ua": "\"Microsoft Edge\";v=\"129\", \"Not=A?Brand\";v=\"8\", \"Chromium\";v=\"129\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"Windows\"",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin"
      },
      "referrer": "https://web.idle-mmo.com/@RyzenRenoir",
      "referrerPolicy": "strict-origin-when-cross-origin",
      "body": "{\"skill_item_id\":16,\"quantity\":146,\"ts2mic5ytx\":\"VFFZ\",\"qty6bx4peh\":\"U1dY\",\"v\":\"1.0.0.1\"}",
      "method": "POST",
      "mode": "cors",
      "credentials": "include"
    });

    if (!reset.ok) {
      throw new Error(`Failed to reset mining time, ${error}`);
    }


    return res.json({ message: '@RyzenRenoir Success reset mining time' });
  } catch (error) {
    throw error;
  }
});

router.get('/@HackerInside', async function (req, res, next) {
  try {

    const switchAcc = await fetch("https://web.idle-mmo.com/user/character/switch/366997", {
      "headers": {
        "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
        "accept-language": "id,en-US;q=0.9,en;q=0.8",
        "cache-control": "max-age=0",
        "content-type": "application/x-www-form-urlencoded",
        "priority": "u=0, i",
        "sec-ch-ua": "\"Microsoft Edge\";v=\"129\", \"Not=A?Brand\";v=\"8\", \"Chromium\";v=\"129\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"Windows\"",
        "sec-fetch-dest": "document",
        "sec-fetch-mode": "navigate",
        "sec-fetch-site": "same-origin",
        "sec-fetch-user": "?1",
        "upgrade-insecure-requests": "1"
      },
      "referrer": "https://web.idle-mmo.com/@RyzenRenoir",
      "referrerPolicy": "strict-origin-when-cross-origin",
      "body": "_token=Fv9WeJkbTXRTj0duCvp8o2w5cx9BYjic9YuXD7TX",
      "method": "POST",
      "mode": "cors",
      "credentials": "include"
    });

    if (!switchAcc.ok) {
      throw new Error(`Failed to switch account, ${error}`);
    }

    const reset = await fetch("https://web.idle-mmo.com/api/skills/start?expires=1728907247&signature=84f41636d3fbafc81e9eaa2389c2d0d330d24622d0a71d09cb8e291a8f59c0c0", {
      "headers": {
        "accept": "application/json",
        "accept-language": "id,en-US;q=0.9,en;q=0.8",
        "authorization": "Bearer zPJOb3TsnbVqMLW9kdnMu7Xld4GHIJrb1u4uhfRul8FuIGv5HNW6Lwg4hUkI",
        "content-type": "application/json",
        "priority": "u=1, i",
        "sec-ch-ua": "\"Microsoft Edge\";v=\"129\", \"Not=A?Brand\";v=\"8\", \"Chromium\";v=\"129\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"Windows\"",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin"
      },
      "referrer": "https://web.idle-mmo.com/skills/view/mining?same_window=true",
      "referrerPolicy": "strict-origin-when-cross-origin",
      "body": "{\"skill_item_id\":16,\"quantity\":166,\"ts2mic5ytx\":\"UVJR\",\"qty6bx4peh\":\"VFFR\",\"v\":\"1.0.0.1\"}",
      "method": "POST",
      "mode": "cors",
      "credentials": "include"
    });

    if (!reset.ok) {
      throw new Error(`Failed to reset mining time, ${error}`);

    }

    return res.json({ message: '@HackerInside Success reset mining time' });
  } catch (error) {
    throw error;
  }
});

module.exports = router;

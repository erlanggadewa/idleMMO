var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/@RyzenRenoir', async function (req, res, next) {
  try {
    let maxAttempt = 10;
    let isFailedSwitch = false
    do {
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
          "upgrade-insecure-requests": "1",
          "cookie": "dismissed_announcements=3; gawain_lancelot=c2b585bif73c; remember_web_59ba36addc2b2f9401580f014c7f58ea4e30989d=eyJpdiI6Ikp1c29CVjVsV1ZQVDhmTS9NTnlXdGc9PSIsInZhbHVlIjoiUGcyRnpXRmJmZDJ3bVdQOTJkN2VlUEJtemZ3SlNRNkJDTGc2MzhJMDc1bGprR3RkZG9zUENqWWhQa3FVdVA4My9xdmdrV0hscjA4M2xRTU9yU1BnTmIvVDdxRjBPTEg5WERsZnpVREFoZ2dCRytCYXdrWHM1allmYVRqTG83TUlqeFM1dm91SVFUNHJURnpSOXBrcFRqbGlESVM5bkNVYzBUdzJxUGJuWnFRaGtqNWZQdGFoS2lqa3dmNnZSUmllNnBvU3Rtbm9XZDI4QzlTZUlBdnZ6d3R0eit6SUFkR1NnYjdOdnZyT3J6RT0iLCJtYWMiOiI5NDI0ZjY0ODVlMzc5NTM4YzMwNzAwNGIxNGQ0MTU1OGIzZTIwNjAyM2I2ZGJhNWNhZmVkOTM4YjM4ZDk0ZDgxIiwidGFnIjoiIn0%3D; dropdown_skills=true; XSRF-TOKEN=eyJpdiI6IitOVDJjTUdrRjB5endzUEM5M1hsMnc9PSIsInZhbHVlIjoiOW5rQnl0UEsvenE1Nml6eW1uOTI2TFRFY3ZZUDRLcUd4WFB3TysvQk5OdWo0S1dRMC9xMkNVb0VXbkUzUkdSV2RpWWthTkNNS2R4MXdad2pkcUlMc3dUQmR0SDZ5NFBiOFJMemhIaHdRLzBXNGcxSkk5am1lTnlXVnhqc1NHbFciLCJtYWMiOiI2MjUyYTdmNjgxN2Q5YzczOTFlZTRlMzAxZDQyMjcxNGM4YTg5MjAyMmQyOGYxMzY0Zjc3NDA2MmU1MDE0OWFjIiwidGFnIjoiIn0%3D; idlemmo_session=eyJpdiI6Im5jQjE3eWxUQ3ZiMDdvRm96SkM0NkE9PSIsInZhbHVlIjoiQXdITkhDbEU3KzQ2SFpVbGFRWmFsbFE1MFpXMTZLYzZRbjg3WXJnSFFFL1NnWUhWRHBsZ1A3NjhvTzd5WGxRQzRmK3lrbGNkSWFOaVMwRnVBNENKSHBWNFRCak9zbCt2V1pORnJpUmtqbHkyTjBVQ09pN2RML3VKUEVzTUVsV1giLCJtYWMiOiI3ZGE3MzUyYzdhMDg0ZjEyNGUyNWU4MzI3OTQ3NjE2MWZhNTYzNzQxOTNkNzhkY2E2ZDdhMTUzMzc0NmMyZDMwIiwidGFnIjoiIn0%3D",
          "Referer": "https://web.idle-mmo.com/@HackerInside",
          "Referrer-Policy": "strict-origin-when-cross-origin"
        },
        "body": "_token=dVYKm2QUjWtFanrA5Nf90MLZKzgBmv2nhv8DPIal",
        "method": "POST"
      });
      if (switchAcc.status !== 200) {
        isFailedSwitch = true
        maxAttempt--
      } else {
        isFailedSwitch = false
      }
    } while (isFailedSwitch && maxAttempt > 0);

    let isFailedReset = false
    do {
      const reset = await fetch("https://web.idle-mmo.com/api/skills/start?expires=1728606326&signature=db23e9fc27123ea51fbf4b019611fc92b5fdcc95e9efc0d9b22e5a6daf45b2ef", {
        "headers": {
          "accept": "application/json",
          "accept-language": "id,en-US;q=0.9,en;q=0.8",
          "authorization": "Bearer NnxLk8VtaMXlyu9nDuQxVufmBeSNAfE6wzUhQaJ4VnD1MCmos6meH621w1Uf",
          "content-type": "application/json",
          "priority": "u=1, i",
          "sec-ch-ua": "\"Microsoft Edge\";v=\"129\", \"Not=A?Brand\";v=\"8\", \"Chromium\";v=\"129\"",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": "\"Windows\"",
          "sec-fetch-dest": "empty",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-origin",
          "cookie": "dismissed_announcements=3; gawain_lancelot=c2b585bif73c; remember_web_59ba36addc2b2f9401580f014c7f58ea4e30989d=eyJpdiI6Ikp1c29CVjVsV1ZQVDhmTS9NTnlXdGc9PSIsInZhbHVlIjoiUGcyRnpXRmJmZDJ3bVdQOTJkN2VlUEJtemZ3SlNRNkJDTGc2MzhJMDc1bGprR3RkZG9zUENqWWhQa3FVdVA4My9xdmdrV0hscjA4M2xRTU9yU1BnTmIvVDdxRjBPTEg5WERsZnpVREFoZ2dCRytCYXdrWHM1allmYVRqTG83TUlqeFM1dm91SVFUNHJURnpSOXBrcFRqbGlESVM5bkNVYzBUdzJxUGJuWnFRaGtqNWZQdGFoS2lqa3dmNnZSUmllNnBvU3Rtbm9XZDI4QzlTZUlBdnZ6d3R0eit6SUFkR1NnYjdOdnZyT3J6RT0iLCJtYWMiOiI5NDI0ZjY0ODVlMzc5NTM4YzMwNzAwNGIxNGQ0MTU1OGIzZTIwNjAyM2I2ZGJhNWNhZmVkOTM4YjM4ZDk0ZDgxIiwidGFnIjoiIn0%3D; dropdown_skills=true; XSRF-TOKEN=eyJpdiI6Ik1tOUcvakNUK0dZWGpVN1M1Rjk4QVE9PSIsInZhbHVlIjoiK1ZmemV1anV6YnB0MlZhemZxUWhtTXVMbE8yYnhlWm9pWmpUZ1F0OWhBTnRKaG90L3ZHNzdyWXl3ZFl2QURXTnpGczVERm9RMnk1RHowV29vVXBORFBUZHN1U2hiWGdOYUpDdXF2M1FpZW1LdUlSa2dkWGw2RUE0TjBNUkdQTUMiLCJtYWMiOiJmOTE4MTBkYzFmN2NlZmFkMDk2OTZhMGYxMmQ2YWFkYWIzZjNiNTUwODI2ZjBmZTNiNTZmNmQ3Yzg0Yzc3ZWI4IiwidGFnIjoiIn0%3D; idlemmo_session=eyJpdiI6IjZMaDlHYUZqb2NvU2hYWnpFd3F4VVE9PSIsInZhbHVlIjoiNkE5TW12TExpcWMrYWY5L2ZGTkw1a3FKVFhnQnZDWFkrdkduMHd1YndLSjRQaUt2SGIyTUlCWDVPUUhTNlYwSGhkOVF3NDVzUVM1MTA0emNjQkM2Y296Q21CUkk0YlV3dGUreU96MWlaSmpLUkl5MU9wdU9SVC9WbWl6cFl4aUciLCJtYWMiOiI3MjgyMDY2OTk3NzUwNGZlZDdkZjVlZWNjZDgzODNjYTYwOWUwZDFmNWVmNDYxYjMzMTc3MTlkNDM3MTViYWE1IiwidGFnIjoiIn0%3D",
          "Referer": "https://web.idle-mmo.com/skills/view/mining",
          "Referrer-Policy": "strict-origin-when-cross-origin"
        },
        "body": "{\"skill_item_id\":16,\"quantity\":146,\"ts2mic5ytx\":\"V1NdRQ==\",\"qty6bx4peh\":\"V1lR\",\"v\":\"1.0.0.1\"}",
        "method": "POST"
      });
      if (reset.status !== 200) {
        isFailedReset = true
        maxAttempt--
      } else {
        isFailedReset = false
      }
    } while (isFailedReset && maxAttempt > 0);


    return res.json({ message: '@RyzenRenoir Success reset mining time' });
  } catch (error) {
    throw new Error(`Failed to reset mining time, ${error}`);

  }
});

router.get('/@HackerInside', async function (req, res, next) {
  try {
    let maxAttempt = 10;
    let isFailedSwitch = false
    do {
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
          "upgrade-insecure-requests": "1",
          "cookie": "dismissed_announcements=3; gawain_lancelot=c2b585bif73c; remember_web_59ba36addc2b2f9401580f014c7f58ea4e30989d=eyJpdiI6Ikp1c29CVjVsV1ZQVDhmTS9NTnlXdGc9PSIsInZhbHVlIjoiUGcyRnpXRmJmZDJ3bVdQOTJkN2VlUEJtemZ3SlNRNkJDTGc2MzhJMDc1bGprR3RkZG9zUENqWWhQa3FVdVA4My9xdmdrV0hscjA4M2xRTU9yU1BnTmIvVDdxRjBPTEg5WERsZnpVREFoZ2dCRytCYXdrWHM1allmYVRqTG83TUlqeFM1dm91SVFUNHJURnpSOXBrcFRqbGlESVM5bkNVYzBUdzJxUGJuWnFRaGtqNWZQdGFoS2lqa3dmNnZSUmllNnBvU3Rtbm9XZDI4QzlTZUlBdnZ6d3R0eit6SUFkR1NnYjdOdnZyT3J6RT0iLCJtYWMiOiI5NDI0ZjY0ODVlMzc5NTM4YzMwNzAwNGIxNGQ0MTU1OGIzZTIwNjAyM2I2ZGJhNWNhZmVkOTM4YjM4ZDk0ZDgxIiwidGFnIjoiIn0%3D; dropdown_skills=true; XSRF-TOKEN=eyJpdiI6Im1rMVpETFVqcWl5czQyUUdYYjFNUEE9PSIsInZhbHVlIjoiS3EySGJaa2Rsb1FXb2JnN2pnMjlFRERaUEdQUGNZSXFETEhjTmMzQlNCYXdlVE1BaWs1Y3N0SitQUkh0M2JZb1VkcnlRalhIZjNsRm5kTk9TWnJydE5mYUdmbDRPOHJtUExxYUZ3UzdPWU5yVVBzelVKMHBJalRUUnpNTGorVW4iLCJtYWMiOiIwNjFmNDY4NjFlMzdiZWE5NmIyOGY5ODA4NWEwMjI4NTdiNzVkYzJhY2Q3N2VlY2NhNmFkNGM1MjEzYzczMWE4IiwidGFnIjoiIn0%3D; idlemmo_session=eyJpdiI6ImtLTUxGbWExRkU5bm1va0NqdDJkWUE9PSIsInZhbHVlIjoiZjdsRFJwbG42STlKUGNuajBWQTZ2ZDdGWHA4YXpaMnpRb1l3U2lVYjVJMDEzcC8zb1VOTU9IS1ZGN3FsUzJnVVhDOFFmem8zcnNzT0J3azdFb1hWWVplaHkwR0RHaXZjSXIxMFNzcGdVTm52VjFTbUJtQ1dLRTZhK0ZDRWNXTVoiLCJtYWMiOiIyYTg3YzAxOGIxZDAzMWRmZDc2YmNhYzIzOWNkN2NiMTc1ZDI1OTI0MzEwOGM1YmI4NzcyYTM2NjExY2EzZmEwIiwidGFnIjoiIn0%3D",
          "Referer": "https://web.idle-mmo.com/skills/view/mining",
          "Referrer-Policy": "strict-origin-when-cross-origin"
        },
        "body": "_token=dVYKm2QUjWtFanrA5Nf90MLZKzgBmv2nhv8DPIal",
        "method": "POST"
      });

      if (switchAcc.status !== 200) {
        isFailedSwitch = true
        maxAttempt--
      } else {
        isFailedSwitch = false
      }
    } while (isFailedSwitch && maxAttempt > 0);

    let isFailedReset = false
    do {
      const reset = await fetch("https://web.idle-mmo.com/api/skills/start?expires=1728628636&signature=fdd26a311ff96750fb609038598039a73260f0d82b97bdf989a1d6de4adaddc9", {
        "headers": {
          "accept": "application/json",
          "accept-language": "id,en-US;q=0.9,en;q=0.8",
          "authorization": "Bearer NnxLk8VtaMXlyu9nDuQxVufmBeSNAfE6wzUhQaJ4VnD1MCmos6meH621w1Uf",
          "content-type": "application/json",
          "priority": "u=1, i",
          "sec-ch-ua": "\"Microsoft Edge\";v=\"129\", \"Not=A?Brand\";v=\"8\", \"Chromium\";v=\"129\"",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": "\"Windows\"",
          "sec-fetch-dest": "empty",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-origin",
          "cookie": "dismissed_announcements=3; gawain_lancelot=c2b585bif73c; remember_web_59ba36addc2b2f9401580f014c7f58ea4e30989d=eyJpdiI6Ikp1c29CVjVsV1ZQVDhmTS9NTnlXdGc9PSIsInZhbHVlIjoiUGcyRnpXRmJmZDJ3bVdQOTJkN2VlUEJtemZ3SlNRNkJDTGc2MzhJMDc1bGprR3RkZG9zUENqWWhQa3FVdVA4My9xdmdrV0hscjA4M2xRTU9yU1BnTmIvVDdxRjBPTEg5WERsZnpVREFoZ2dCRytCYXdrWHM1allmYVRqTG83TUlqeFM1dm91SVFUNHJURnpSOXBrcFRqbGlESVM5bkNVYzBUdzJxUGJuWnFRaGtqNWZQdGFoS2lqa3dmNnZSUmllNnBvU3Rtbm9XZDI4QzlTZUlBdnZ6d3R0eit6SUFkR1NnYjdOdnZyT3J6RT0iLCJtYWMiOiI5NDI0ZjY0ODVlMzc5NTM4YzMwNzAwNGIxNGQ0MTU1OGIzZTIwNjAyM2I2ZGJhNWNhZmVkOTM4YjM4ZDk0ZDgxIiwidGFnIjoiIn0%3D; dropdown_skills=true; XSRF-TOKEN=eyJpdiI6Ik80dGRLRU5iQWdhdHkwK0d2dmJWcGc9PSIsInZhbHVlIjoiR0ZwL1BoenNwSXQvam45a0Vmem1xUFhYcDlnT0l2d3RZWHR6MndRK0RCeUpTZ3Z5aWpBMUdpZ0lOTzVYaXplWkxXaE52U1A1aUtwZXNhNWxwY3VKTHhXUnZKQXB3SFJBdzNxRG0zbVh2a0NZeWdJeElYQkN2OUZCeElHZVJHdSsiLCJtYWMiOiJjMWUxN2JjMmVlM2YzMGM0MWY2NGZiMDA0MzMxMjI3NzcyODljOGNhN2RiZGE5Nzg1YmQ0MDFjZGVhNWQ3NmQ2IiwidGFnIjoiIn0%3D; idlemmo_session=eyJpdiI6ImZncGVjZ3N5bkQ1RkI5d3NiMTVucVE9PSIsInZhbHVlIjoiUHQ4NlY4UE9WN0tiaWxrT1g0YjIwY3EvRk5Sak1jTkNZZ1N5NFR3T2lHNkZyQW9GMWFubjR3M3oyeEpTNzF0Z2xyZzFUNHZOaitodUFzWTN0VVk1TnFQRzJ6Wkc1NnUzYyt3dEc4TlgyRjFZZkhkb1ZRbkp3RWNrYlJxRjJJbysiLCJtYWMiOiI2ZDAxYjgwNzA1MGNiODE3NTc3YjY4YmRhNGI5NjIzZmNhNGZlZTFkYWZiN2Y0MzY1MWExZmY4MTczYzg4ZWVhIiwidGFnIjoiIn0%3D",
          "Referer": "https://web.idle-mmo.com/skills/view/mining",
          "Referrer-Policy": "strict-origin-when-cross-origin"
        },
        "body": "{\"skill_item_id\":16,\"quantity\":166,\"ts2mic5ytx\":\"Xlhe\",\"qty6bx4peh\":\"V1ha\",\"v\":\"1.0.0.1\"}",
        "method": "POST"
      });
      if (reset.status !== 200) {
        isFailedReset = true
        maxAttempt--
      } else {
        isFailedReset = false
      }
    } while (isFailedReset && maxAttempt > 0);

    return res.json({ message: '@HackerInside Success reset mining time' });
  } catch (error) {
    throw new Error(`Failed to reset mining time, ${error}`);
  }
});

module.exports = router;

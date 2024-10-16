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
        "upgrade-insecure-requests": "1",
        "cookie": "dismissed_announcements=3; remember_web_59ba36addc2b2f9401580f014c7f58ea4e30989d=eyJpdiI6Ikp1c29CVjVsV1ZQVDhmTS9NTnlXdGc9PSIsInZhbHVlIjoiUGcyRnpXRmJmZDJ3bVdQOTJkN2VlUEJtemZ3SlNRNkJDTGc2MzhJMDc1bGprR3RkZG9zUENqWWhQa3FVdVA4My9xdmdrV0hscjA4M2xRTU9yU1BnTmIvVDdxRjBPTEg5WERsZnpVREFoZ2dCRytCYXdrWHM1allmYVRqTG83TUlqeFM1dm91SVFUNHJURnpSOXBrcFRqbGlESVM5bkNVYzBUdzJxUGJuWnFRaGtqNWZQdGFoS2lqa3dmNnZSUmllNnBvU3Rtbm9XZDI4QzlTZUlBdnZ6d3R0eit6SUFkR1NnYjdOdnZyT3J6RT0iLCJtYWMiOiI5NDI0ZjY0ODVlMzc5NTM4YzMwNzAwNGIxNGQ0MTU1OGIzZTIwNjAyM2I2ZGJhNWNhZmVkOTM4YjM4ZDk0ZDgxIiwidGFnIjoiIn0%3D; dropdown_skills=true; gawain_lancelot=c2b585bif73c; XSRF-TOKEN=eyJpdiI6IlVWeklNTUtLMk9uTzJNZ05zcmdVRmc9PSIsInZhbHVlIjoiSFVNUTBXYi9VcVJxck5kdzlCLzJnUWN6WXl3aFdQdlZOT0pxSngvSGRLOFgxYW9KTEdudVozR2ltaHhkeGoxSWR4YWhRRnllZ0J4MEJzMFhNUnNsMjBZdTljc04wM0ZXZUJ4RHdjSWtqOEZ2emI1cXpjT0dYMGx2c1JhYnFaRVAiLCJtYWMiOiI5N2U5MzZiNTdmN2Y1MDc2YzdjZDEwZWJmODdiMTg3NGNmYzgzNzNkNWRkNTM1OTgwZjc1YjI5ODc3ZTVmMTY3IiwidGFnIjoiIn0%3D; idlemmo_session=eyJpdiI6IjJLMVZ1emlQbExPTmlLL0I3eTE2TUE9PSIsInZhbHVlIjoiRDRCTGhHa1lKaDd2ajU4dFU0MmpBT29QUCtCRFRXbHVpeEU5ZU5nQ2Y3WlRTVkpsQlRjMmI2VUpmc3RuNTFWR05GTExnekMrYnlrSzFBdEw2Y2thcWdXaEJHaEdjZGhaOHFYTWNRYVNRZUh5M3YzSTlyUHNDdmNDQzJvOEtKOHIiLCJtYWMiOiJlMGNjM2EwZWU2NDYwMmZiYTI4NzcxOWNjMmRmNTQxYmEwMjdiMTc5NDMwZGMzZGVlNWU0NmRjMmE5OTA2NWIzIiwidGFnIjoiIn0%3D",
        "Referer": "https://web.idle-mmo.com/@HackerInside",
        "Referrer-Policy": "strict-origin-when-cross-origin"
      },
      "body": "_token=GkukX9O8CUymj8w3hGS4SYkrHHBJ4kVesf7w2fkK",
      "method": "POST"
    });


    if (!switchAcc.ok) {
      throw new Error(`Failed to switch account @RyzenRenoir`);
    }

    const reset = await fetch("https://web.idle-mmo.com/api/skills/start?expires=1729152654&signature=4549bc873af3a5d219c600d8b3d2dd8e5d33962e7d17cd3f9af8260fd8cd8923", {
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
        "sec-fetch-site": "same-origin",
        "cookie": "dismissed_announcements=3; remember_web_59ba36addc2b2f9401580f014c7f58ea4e30989d=eyJpdiI6Ikp1c29CVjVsV1ZQVDhmTS9NTnlXdGc9PSIsInZhbHVlIjoiUGcyRnpXRmJmZDJ3bVdQOTJkN2VlUEJtemZ3SlNRNkJDTGc2MzhJMDc1bGprR3RkZG9zUENqWWhQa3FVdVA4My9xdmdrV0hscjA4M2xRTU9yU1BnTmIvVDdxRjBPTEg5WERsZnpVREFoZ2dCRytCYXdrWHM1allmYVRqTG83TUlqeFM1dm91SVFUNHJURnpSOXBrcFRqbGlESVM5bkNVYzBUdzJxUGJuWnFRaGtqNWZQdGFoS2lqa3dmNnZSUmllNnBvU3Rtbm9XZDI4QzlTZUlBdnZ6d3R0eit6SUFkR1NnYjdOdnZyT3J6RT0iLCJtYWMiOiI5NDI0ZjY0ODVlMzc5NTM4YzMwNzAwNGIxNGQ0MTU1OGIzZTIwNjAyM2I2ZGJhNWNhZmVkOTM4YjM4ZDk0ZDgxIiwidGFnIjoiIn0%3D; dropdown_skills=true; gawain_lancelot=c2b585bif73c; XSRF-TOKEN=eyJpdiI6ImtpVG9GR3pEVmQ0ZiszaWxtSldaZ1E9PSIsInZhbHVlIjoickdJYVpyMkp0ZFl3N01JYXF3b1RhK3pKZk5Jekh2Y2t3a2ZGVmlZN2JqdllUSzVqZjlKOFl6eFNvOG9VMHJKbkh5RXBxeVBxbFJPalNvV1FSWFJNdUY4ZE5YVTlrK0lEemY2MWllSTU0NmM2TGxlWVBSb1U4dmh6VmFxQUJ5aG8iLCJtYWMiOiJmZTEzNWI1OWRlZjNkMDgzNmU4YTYyYjc3MjMyOTI1ZGVmODQ3ODcyNDM1ODAxNTY3ZmY1OTczMzUxZWQ4YWY2IiwidGFnIjoiIn0%3D; idlemmo_session=eyJpdiI6IkMxZkkrUmpQRldYdHcvT2x5TkJpSkE9PSIsInZhbHVlIjoiQk1kYVRTYVVSSHRpcjYwQTk4Y3k0K0VLS1l6OHVzYzVDN2t5NzlvUHJWcENRUXg0VW13dEV0MkZhYm5IakNYMDRJVkVnVkoxc3cxcTlybWdlTW9OdGh0YTNpcnliVlJJaExBVGxpV0VyZ3ZXUVQzWHgzd3NBY0NnS3R4RzI0Y24iLCJtYWMiOiI3YTA1ODNiOWQ4NjkzMzNmNmUxYWJiYmQxMjgyMTRkOWU0ZDQ1ZDc5NWIyOTZkZGY2Y2I0Y2I3OTQ5NTg0ZmQxIiwidGFnIjoiIn0%3D",
        "Referer": "https://web.idle-mmo.com/@RyzenRenoir",
        "Referrer-Policy": "strict-origin-when-cross-origin"
      },
      "body": "{\"skill_item_id\":17,\"quantity\":161,\"ts2mic5ytx\":\"VFFb\",\"qty6bx4peh\":\"U1ZR\",\"v\":\"1.0.0.1\"}",
      "method": "POST"
    });

    if (!reset.ok) {
      throw new Error(`Failed to reset mining time @RyzenRenoir`);
    }


    return res.json({ message: '@RyzenRenoir Success reset mining time' });
  } catch (error) {
    throw error;
  }
});

router.get('/@HackerInside', async function (req, res, next) {
  try {
    let isSuccess = false;
    let tryCount = 10;

    await setTimeout(() => {
      return
    }, 5000);

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
          "cookie": "dismissed_announcements=3; remember_web_59ba36addc2b2f9401580f014c7f58ea4e30989d=eyJpdiI6Ikp1c29CVjVsV1ZQVDhmTS9NTnlXdGc9PSIsInZhbHVlIjoiUGcyRnpXRmJmZDJ3bVdQOTJkN2VlUEJtemZ3SlNRNkJDTGc2MzhJMDc1bGprR3RkZG9zUENqWWhQa3FVdVA4My9xdmdrV0hscjA4M2xRTU9yU1BnTmIvVDdxRjBPTEg5WERsZnpVREFoZ2dCRytCYXdrWHM1allmYVRqTG83TUlqeFM1dm91SVFUNHJURnpSOXBrcFRqbGlESVM5bkNVYzBUdzJxUGJuWnFRaGtqNWZQdGFoS2lqa3dmNnZSUmllNnBvU3Rtbm9XZDI4QzlTZUlBdnZ6d3R0eit6SUFkR1NnYjdOdnZyT3J6RT0iLCJtYWMiOiI5NDI0ZjY0ODVlMzc5NTM4YzMwNzAwNGIxNGQ0MTU1OGIzZTIwNjAyM2I2ZGJhNWNhZmVkOTM4YjM4ZDk0ZDgxIiwidGFnIjoiIn0%3D; dropdown_skills=true; gawain_lancelot=c2b585bif73c; XSRF-TOKEN=eyJpdiI6IlJueTk1VUxFMmlMZHpQamhPelRLMFE9PSIsInZhbHVlIjoic0UyZElwbHBXYWhJRlNlNDVFT1k3R2NOV0NGclIycXJBS3c4UnNIYUdra2JJb0k5S1VHenBPUnhuQlVNWlhXNkJxZnNFcmpCcGJWbzZJdXN2RWgxd2thQ2xGVWczMm5xR2t6d2RDamRYejN2SERZNHBlMkpsRnZTODNUSlVwN1QiLCJtYWMiOiI3YjhmMzRkYTdlOWZhZjdiNTgzNTljM2QzYWFlOTFiZGViM2JlMTA1NjFlN2UzNjE5MmFjZGI4ZGJkZTBjY2Q0IiwidGFnIjoiIn0%3D; idlemmo_session=eyJpdiI6ImM3OUVSblI2bDJ1QU1hdGJxbzhhSnc9PSIsInZhbHVlIjoiUlBLL0hCNit5anVGQ09ZVmJsbjAxL2xMNlNudW1sbm5jbnJtRndMeXVnUDA4c0FReGxYVWxWeWhqN3U4Nll1dnA0R3ZVRjJNSkE5NXA2NFQrM0IvamFKcWphdnY5eWRyQUM1M0JtRkd0NjYwMWR6c1RuVGZQblBSdnZ0bXMxcTQiLCJtYWMiOiJiOWE3N2I3YjFiNGQwYjcyZTdkODVjYmMyZGFlMzlkZmFjZWFhN2E0YmIwMDk3NWNjZWE4MjMzMDk3YWRlZTRjIiwidGFnIjoiIn0%3D",
          "Referer": "https://web.idle-mmo.com/@RyzenRenoir",
          "Referrer-Policy": "strict-origin-when-cross-origin"
        },
        "body": "_token=GkukX9O8CUymj8w3hGS4SYkrHHBJ4kVesf7w2fkK",
        "method": "POST"
      });

      const reset = await fetch("https://web.idle-mmo.com/api/dungeon/start/1?expires=1729149152&signature=12390a9145bee36ea70bfefcf8f4e26fc560ec632eb4e693e84a4515adeef7dd", {
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
          "sec-fetch-site": "same-origin",
          "cookie": "dismissed_announcements=3; remember_web_59ba36addc2b2f9401580f014c7f58ea4e30989d=eyJpdiI6Ikp1c29CVjVsV1ZQVDhmTS9NTnlXdGc9PSIsInZhbHVlIjoiUGcyRnpXRmJmZDJ3bVdQOTJkN2VlUEJtemZ3SlNRNkJDTGc2MzhJMDc1bGprR3RkZG9zUENqWWhQa3FVdVA4My9xdmdrV0hscjA4M2xRTU9yU1BnTmIvVDdxRjBPTEg5WERsZnpVREFoZ2dCRytCYXdrWHM1allmYVRqTG83TUlqeFM1dm91SVFUNHJURnpSOXBrcFRqbGlESVM5bkNVYzBUdzJxUGJuWnFRaGtqNWZQdGFoS2lqa3dmNnZSUmllNnBvU3Rtbm9XZDI4QzlTZUlBdnZ6d3R0eit6SUFkR1NnYjdOdnZyT3J6RT0iLCJtYWMiOiI5NDI0ZjY0ODVlMzc5NTM4YzMwNzAwNGIxNGQ0MTU1OGIzZTIwNjAyM2I2ZGJhNWNhZmVkOTM4YjM4ZDk0ZDgxIiwidGFnIjoiIn0%3D; dropdown_skills=true; gawain_lancelot=c2b585bif73c; XSRF-TOKEN=eyJpdiI6IjRZQzAySE9ycERBNnVwSkpMUjk1M1E9PSIsInZhbHVlIjoieUVaeWJKek5vY3BNcDJCcEIrYjFtVi81SXd2bTBoTUdscVZUMHVCd051WlhCTWdGQkFKOXl5alAyYzhWQUJBOGc1RFZ2T3l2VXJ6T1NFMGVBWXNUOWgzTzhPWmxUZEFVbFhpbnl2eHZlOTU5V3RQcDM1bmtZTzM2TG82WmQzc2YiLCJtYWMiOiI0MjYzZWFlZGVlODQ2OWVkY2QyNjA5MTIwNDkzMTM2YmNkZjQyYTE3YWQyMjljZmE0NzhiZGM4YzNkYjY1OGU1IiwidGFnIjoiIn0%3D; idlemmo_session=eyJpdiI6IlhJWEdSR0NYLzN6WHVkTFJ6MGMxNVE9PSIsInZhbHVlIjoibUoyZ241cUprdXJrMC9nYVhlNm9DeEdOR3dUVWZ2YkNhRDZ5cS9IZllFeUppVzI1c2c3U3FJc3VTRVdaWGJ0azY5dUVRK1U0ZjJCNTU2MnBqRDdhbUp1M3FWTURPckw3bzI0ZzRYWkdISkhmemZpMVB4ZUlzKzE1cnFkcExHRmQiLCJtYWMiOiIyMzdjOGU2Mzk1NTY5Y2Y3Mjk3MjExODdhY2IwODZmNjU0ZDRlODQxMWI0YjI1OGQwYmM1ZWY5MGUyZjJjYzlmIiwidGFnIjoiIn0%3D",
          "Referer": "https://web.idle-mmo.com/battle",
          "Referrer-Policy": "strict-origin-when-cross-origin"
        },
        "body": "{\"ts2mic5ytx\":\"UlBQ\",\"qty6bx4peh\":\"U1Zd\",\"v\":\"1.0.0.1\"}",
        "method": "POST"
      });

      if (!switchAcc.ok || !reset.ok) {
        tryCount--;
      } else {
        isSuccess = true;
      }

    } while (!isSuccess || tryCount < 0);

    return res.json({ message: '@HackerInside Success reset mining time' });
  } catch (error) {
    throw error;
  }
});

module.exports = router;

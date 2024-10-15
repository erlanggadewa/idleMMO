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

    const reset = await fetch("https://web.idle-mmo.com/api/skills/start?expires=1729094694&signature=51ce8b3cbb834e55693175b2e0a444e6093e3a583631bf261928bb5ebba878e7", {
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
        "cookie": "dismissed_announcements=3; remember_web_59ba36addc2b2f9401580f014c7f58ea4e30989d=eyJpdiI6Ikp1c29CVjVsV1ZQVDhmTS9NTnlXdGc9PSIsInZhbHVlIjoiUGcyRnpXRmJmZDJ3bVdQOTJkN2VlUEJtemZ3SlNRNkJDTGc2MzhJMDc1bGprR3RkZG9zUENqWWhQa3FVdVA4My9xdmdrV0hscjA4M2xRTU9yU1BnTmIvVDdxRjBPTEg5WERsZnpVREFoZ2dCRytCYXdrWHM1allmYVRqTG83TUlqeFM1dm91SVFUNHJURnpSOXBrcFRqbGlESVM5bkNVYzBUdzJxUGJuWnFRaGtqNWZQdGFoS2lqa3dmNnZSUmllNnBvU3Rtbm9XZDI4QzlTZUlBdnZ6d3R0eit6SUFkR1NnYjdOdnZyT3J6RT0iLCJtYWMiOiI5NDI0ZjY0ODVlMzc5NTM4YzMwNzAwNGIxNGQ0MTU1OGIzZTIwNjAyM2I2ZGJhNWNhZmVkOTM4YjM4ZDk0ZDgxIiwidGFnIjoiIn0%3D; dropdown_skills=true; gawain_lancelot=c2b585bif73c; XSRF-TOKEN=eyJpdiI6IlJueTk1VUxFMmlMZHpQamhPelRLMFE9PSIsInZhbHVlIjoic0UyZElwbHBXYWhJRlNlNDVFT1k3R2NOV0NGclIycXJBS3c4UnNIYUdra2JJb0k5S1VHenBPUnhuQlVNWlhXNkJxZnNFcmpCcGJWbzZJdXN2RWgxd2thQ2xGVWczMm5xR2t6d2RDamRYejN2SERZNHBlMkpsRnZTODNUSlVwN1QiLCJtYWMiOiI3YjhmMzRkYTdlOWZhZjdiNTgzNTljM2QzYWFlOTFiZGViM2JlMTA1NjFlN2UzNjE5MmFjZGI4ZGJkZTBjY2Q0IiwidGFnIjoiIn0%3D; idlemmo_session=eyJpdiI6ImM3OUVSblI2bDJ1QU1hdGJxbzhhSnc9PSIsInZhbHVlIjoiUlBLL0hCNit5anVGQ09ZVmJsbjAxL2xMNlNudW1sbm5jbnJtRndMeXVnUDA4c0FReGxYVWxWeWhqN3U4Nll1dnA0R3ZVRjJNSkE5NXA2NFQrM0IvamFKcWphdnY5eWRyQUM1M0JtRkd0NjYwMWR6c1RuVGZQblBSdnZ0bXMxcTQiLCJtYWMiOiJiOWE3N2I3YjFiNGQwYjcyZTdkODVjYmMyZGFlMzlkZmFjZWFhN2E0YmIwMDk3NWNjZWE4MjMzMDk3YWRlZTRjIiwidGFnIjoiIn0%3D",
        "Referer": "https://web.idle-mmo.com/@RyzenRenoir",
        "Referrer-Policy": "strict-origin-when-cross-origin"
      },
      "body": "{\"skill_item_id\":16,\"quantity\":179,\"ts2mic5ytx\":\"U1Nb\",\"qty6bx4peh\":\"U1BZ\",\"v\":\"1.0.0.1\"}",
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

    if (!switchAcc.ok) {
      throw new Error(`Failed to switch account @HackerInside`);
    }

    const reset = await fetch("https://web.idle-mmo.com/api/skills/start?expires=1729094755&signature=33616c56e603f8f0b2691acafbd5b872f36e14393b75a7b43be8c1840702928a", {
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
        "cookie": "dismissed_announcements=3; remember_web_59ba36addc2b2f9401580f014c7f58ea4e30989d=eyJpdiI6Ikp1c29CVjVsV1ZQVDhmTS9NTnlXdGc9PSIsInZhbHVlIjoiUGcyRnpXRmJmZDJ3bVdQOTJkN2VlUEJtemZ3SlNRNkJDTGc2MzhJMDc1bGprR3RkZG9zUENqWWhQa3FVdVA4My9xdmdrV0hscjA4M2xRTU9yU1BnTmIvVDdxRjBPTEg5WERsZnpVREFoZ2dCRytCYXdrWHM1allmYVRqTG83TUlqeFM1dm91SVFUNHJURnpSOXBrcFRqbGlESVM5bkNVYzBUdzJxUGJuWnFRaGtqNWZQdGFoS2lqa3dmNnZSUmllNnBvU3Rtbm9XZDI4QzlTZUlBdnZ6d3R0eit6SUFkR1NnYjdOdnZyT3J6RT0iLCJtYWMiOiI5NDI0ZjY0ODVlMzc5NTM4YzMwNzAwNGIxNGQ0MTU1OGIzZTIwNjAyM2I2ZGJhNWNhZmVkOTM4YjM4ZDk0ZDgxIiwidGFnIjoiIn0%3D; dropdown_skills=true; gawain_lancelot=c2b585bif73c; XSRF-TOKEN=eyJpdiI6IkJCb3d1RHFETExMemw1d0RyMGs3SkE9PSIsInZhbHVlIjoiNysxc0t1L2prMUM3U3hOMlhEVDI2cVhqamJ6NnA2Rjg2NjRwUkdxd0phU1JpMDd3dnVVb05RSkYxZWxTZFVaek9nZnhPNlRXQjhicUZ0TzhKYVFPbytUVVdLa3FCa3lNUmRLR2lIN01yL1dWTkhJL3JUUG84VzVhOU5JSzE3ZEsiLCJtYWMiOiI1MDQyOWU5ZmM0YmI5YmU5MDBhMzk0ZDJjNzNjYmI1YTAzY2JkZDdhOTVlNTA4ODg5NWZjYTBjNmM1ZjBlZTA1IiwidGFnIjoiIn0%3D; idlemmo_session=eyJpdiI6ImJ2OTZubS82Z2t2a2FsZkI3bmtqWHc9PSIsInZhbHVlIjoiS0tGNGxnSlBsV3pkZjZodlRPZjNpemhTQnNvNDhTclo4U0lKQjl2Z2Y1cE02MEhCcnJuVFQ2eW40VXBrU3BLbE10ejRJYUxVdk5YR1hhTUpzME1rbzlVNk45cmYwRUhRRDBqMnF6ZlU0RFhrZUlsUURZdEpHTzVLQ2FQZHFab3IiLCJtYWMiOiI2ZmM4MGJiMzdhMjUzNmEzY2NhMTE0ZDY2YTRlNjJkYWZlYjZiYmU1ZGUyMjFlYjc4ZTE2YWI3YmQ0ZjkzMzc3IiwidGFnIjoiIn0%3D",
        "Referer": "https://web.idle-mmo.com/@HackerInside",
        "Referrer-Policy": "strict-origin-when-cross-origin"
      },
      "body": "{\"skill_item_id\":16,\"quantity\":208,\"ts2mic5ytx\":\"U1NR\",\"qty6bx4peh\":\"U1BZ\",\"v\":\"1.0.0.1\"}",
      "method": "POST"
    });

    if (!reset.ok) {
      throw new Error(`Failed to reset mining time @HackerInside`);

    }

    return res.json({ message: '@HackerInside Success reset mining time' });
  } catch (error) {
    throw error;
  }
});

module.exports = router;

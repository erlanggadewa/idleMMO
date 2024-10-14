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
        "cookie": "dismissed_announcements=3; remember_web_59ba36addc2b2f9401580f014c7f58ea4e30989d=eyJpdiI6Ikp1c29CVjVsV1ZQVDhmTS9NTnlXdGc9PSIsInZhbHVlIjoiUGcyRnpXRmJmZDJ3bVdQOTJkN2VlUEJtemZ3SlNRNkJDTGc2MzhJMDc1bGprR3RkZG9zUENqWWhQa3FVdVA4My9xdmdrV0hscjA4M2xRTU9yU1BnTmIvVDdxRjBPTEg5WERsZnpVREFoZ2dCRytCYXdrWHM1allmYVRqTG83TUlqeFM1dm91SVFUNHJURnpSOXBrcFRqbGlESVM5bkNVYzBUdzJxUGJuWnFRaGtqNWZQdGFoS2lqa3dmNnZSUmllNnBvU3Rtbm9XZDI4QzlTZUlBdnZ6d3R0eit6SUFkR1NnYjdOdnZyT3J6RT0iLCJtYWMiOiI5NDI0ZjY0ODVlMzc5NTM4YzMwNzAwNGIxNGQ0MTU1OGIzZTIwNjAyM2I2ZGJhNWNhZmVkOTM4YjM4ZDk0ZDgxIiwidGFnIjoiIn0%3D; dropdown_skills=true; gawain_lancelot=c2b585bif73c; XSRF-TOKEN=eyJpdiI6ImRXMmIvTFhuTFU2V2t2UTE1MGMrZlE9PSIsInZhbHVlIjoiKzBUUkY2eEwwL2Z1UjVvY0xSelRzZm8rMWhoMzZ4WEJsbWd3dUplK09yVm0yZG1NVm5aVjVHVHhWV21tSlBXZ2FXeVp4VnhxQzZjZ3pDc3MxcW1ncVZKUzRjTk5JY3kycnU0Tmg0NTJkQzFFeEN1SXg3eEI3TjVpUTJVTERiM3YiLCJtYWMiOiI3YTQ4ZDVhODRjYzgyMzI4N2E5NmNiZWUxMTAxZDU1OTViN2ZjZmQ4ZTM2OTJmZWJjODRjZDI2N2E0NmMwZWY4IiwidGFnIjoiIn0%3D; idlemmo_session=eyJpdiI6Im1OVXl1N1d5eFk2a0R3TFlBT3ZnY0E9PSIsInZhbHVlIjoidExrcmhOam52TUNPakpRTmRCeENIeGFjeEx1czJCVTBRYWsyekoxTm5Va1k5TWw4RWhTMmlLbmpLTGdCczJsTVdHL01TVldQaEViTVJyNlc0WUdLTXBOQ1JuMm9sWU43ODUzZjQzSWZJUTVXdFVxTHg0dExTODFoc3VYVTFsRWQiLCJtYWMiOiIxNmZlNTNhOWU4OWIyNzRiZTQ2ZTRjYzgzYzdiYTcwNzhkNGI0OTgzNzMwYzE4ZTJiNDg4ZWM5ZmVjZDYxMTQ0IiwidGFnIjoiIn0%3D",
        "Referer": "https://web.idle-mmo.com/@HackerInside",
        "Referrer-Policy": "strict-origin-when-cross-origin"
      },
      "body": "_token=OePAUc6BfyLKD9sAdzE6NO9bLrgJXrrIlP4K2inA",
      "method": "POST"
    });


    if (!switchAcc.ok) {
      throw new Error(`Failed to switch account, ${error}`);
    }

    const reset = await fetch("https://web.idle-mmo.com/api/skills/start?expires=1729005570&signature=1937114dbedf2615c92125635e0dc3860fdf43b506b1548319627902d6ba7464", {
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
        "cookie": "dismissed_announcements=3; remember_web_59ba36addc2b2f9401580f014c7f58ea4e30989d=eyJpdiI6Ikp1c29CVjVsV1ZQVDhmTS9NTnlXdGc9PSIsInZhbHVlIjoiUGcyRnpXRmJmZDJ3bVdQOTJkN2VlUEJtemZ3SlNRNkJDTGc2MzhJMDc1bGprR3RkZG9zUENqWWhQa3FVdVA4My9xdmdrV0hscjA4M2xRTU9yU1BnTmIvVDdxRjBPTEg5WERsZnpVREFoZ2dCRytCYXdrWHM1allmYVRqTG83TUlqeFM1dm91SVFUNHJURnpSOXBrcFRqbGlESVM5bkNVYzBUdzJxUGJuWnFRaGtqNWZQdGFoS2lqa3dmNnZSUmllNnBvU3Rtbm9XZDI4QzlTZUlBdnZ6d3R0eit6SUFkR1NnYjdOdnZyT3J6RT0iLCJtYWMiOiI5NDI0ZjY0ODVlMzc5NTM4YzMwNzAwNGIxNGQ0MTU1OGIzZTIwNjAyM2I2ZGJhNWNhZmVkOTM4YjM4ZDk0ZDgxIiwidGFnIjoiIn0%3D; dropdown_skills=true; gawain_lancelot=c2b585bif73c; XSRF-TOKEN=eyJpdiI6Ikh6RHdtZ1h3OGc5VHBydC9oVlNlZEE9PSIsInZhbHVlIjoiNE1SU3YxN3FLTExuOWN0UFJiMjNDLzNZNldqRTdOUjNHYXdpZ0ROQmh1WDEwTUYrTnF5TzFMVWJIdFUwN3JEa2tOQ3VwRlR2bTU2VEY2OEhuRHNnUnpFMmZjckd5N3VNUTk3a1NaRnFORWFUdGlnKzRlMmZFWmFESDZjSlNQNzciLCJtYWMiOiI5ZjBmYjg5MDZmZWMyODZkMzlkYTc2Yzc2ZjRiOWNhOWE5ZjAzNzFmNDRhODkxODcyNzllMmVlNjk3ODJiM2Y2IiwidGFnIjoiIn0%3D; idlemmo_session=eyJpdiI6Ild5TDJLcVBha0d0VTZ5aVhuUWMwK1E9PSIsInZhbHVlIjoidS8xa2xjcnBiUTRoZmU2cFhJMlZtYm0ySXZvNzRRcFJMaWlGOG11RjNrYVpiUjdtM1dETUE0OWpjcm1zeWNmWlNFRG8wQUh3ei9ScGN6eHdQa1oyT1ZuSDJudGxlTTQwdHVQVkd0UXZoVVFEVWZqYzArcjdhajRrblA0SWd1MGsiLCJtYWMiOiJlZmM2OWM4ZWExYTQ0M2NlZDE3NDcwYjM1NzNhZDE3NjViNjk1MmVmNWMyY2Y3M2JlMmNlMWI1ZGRmMGExZmVmIiwidGFnIjoiIn0%3D",
        "Referer": "https://web.idle-mmo.com/@RyzenRenoir",
        "Referrer-Policy": "strict-origin-when-cross-origin"
      },
      "body": "{\"skill_item_id\":16,\"quantity\":146,\"ts2mic5ytx\":\"U1Nb\",\"qty6bx4peh\":\"U1BZ\",\"v\":\"1.0.0.1\"}",
      "method": "POST"
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
        "upgrade-insecure-requests": "1",
        "cookie": "dismissed_announcements=3; remember_web_59ba36addc2b2f9401580f014c7f58ea4e30989d=eyJpdiI6Ikp1c29CVjVsV1ZQVDhmTS9NTnlXdGc9PSIsInZhbHVlIjoiUGcyRnpXRmJmZDJ3bVdQOTJkN2VlUEJtemZ3SlNRNkJDTGc2MzhJMDc1bGprR3RkZG9zUENqWWhQa3FVdVA4My9xdmdrV0hscjA4M2xRTU9yU1BnTmIvVDdxRjBPTEg5WERsZnpVREFoZ2dCRytCYXdrWHM1allmYVRqTG83TUlqeFM1dm91SVFUNHJURnpSOXBrcFRqbGlESVM5bkNVYzBUdzJxUGJuWnFRaGtqNWZQdGFoS2lqa3dmNnZSUmllNnBvU3Rtbm9XZDI4QzlTZUlBdnZ6d3R0eit6SUFkR1NnYjdOdnZyT3J6RT0iLCJtYWMiOiI5NDI0ZjY0ODVlMzc5NTM4YzMwNzAwNGIxNGQ0MTU1OGIzZTIwNjAyM2I2ZGJhNWNhZmVkOTM4YjM4ZDk0ZDgxIiwidGFnIjoiIn0%3D; dropdown_skills=true; gawain_lancelot=c2b585bif73c; XSRF-TOKEN=eyJpdiI6Ilh6elpoQWtXSVRlODFSV1ZpaFhEd3c9PSIsInZhbHVlIjoiQTUwcklUQjlzRUljSUdlZ1h3RkxCOENCd1BicE5QVXhUV0FPdm14YlRMczZNY1o1c0VQRVJKYTYyTllhTk5DQlNyb3FSN2x0a1Y5NVhWOFdoZi9WZi9ORWFiSzFSaXkrZ1NPMVZ4RTlDWkVXMU1BendHTVBNcU5BY2twNndSajMiLCJtYWMiOiIxMjVlNDQ3OWM2ODI0NTBjZDljZjgxY2Q4YzlhNTVkNjY0YzdkOWFjZjNjN2JlMzgxNzBjNTkzOTU2OTI2YWUzIiwidGFnIjoiIn0%3D; idlemmo_session=eyJpdiI6InlJRHJLMVFhamwwamJWNzVyOTZlcHc9PSIsInZhbHVlIjoieWFUL3pOTXVuZEllWHhRSkFjSnZENDVab2ltSWV6WUNRQ1MzSlRJNStvTVE2M1lEVis2QWVQaVFvVlNpM0Fmd2FNS29TN1ArMFVHakZ2T21rT0l2MitLc0lMa3luV2F2Um51Ky9wUnV0M1FkemVhMy9yelVCZ0VJNFFwUm9Gd1giLCJtYWMiOiJhMTRmYzFkZTQzNzU1ZDBiOTNiMmEzZTIwYWQ3ZmZiOTQwNjZlMDFhYTExOTQwNTQ4OGJiY2FhZTVhZjkwMzBiIiwidGFnIjoiIn0%3D",
        "Referer": "https://web.idle-mmo.com/@RyzenRenoir",
        "Referrer-Policy": "strict-origin-when-cross-origin"
      },
      "body": "_token=OePAUc6BfyLKD9sAdzE6NO9bLrgJXrrIlP4K2inA",
      "method": "POST"
    });

    if (!switchAcc.ok) {
      throw new Error(`Failed to switch account, ${error}`);
    }

    const reset = await fetch("https://web.idle-mmo.com/api/skills/start?expires=1729005505&signature=d472c71b025711c4df71af323d7ce001bb9f32849c884714fc6e5103c986194b", {
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
        "cookie": "dismissed_announcements=3; remember_web_59ba36addc2b2f9401580f014c7f58ea4e30989d=eyJpdiI6Ikp1c29CVjVsV1ZQVDhmTS9NTnlXdGc9PSIsInZhbHVlIjoiUGcyRnpXRmJmZDJ3bVdQOTJkN2VlUEJtemZ3SlNRNkJDTGc2MzhJMDc1bGprR3RkZG9zUENqWWhQa3FVdVA4My9xdmdrV0hscjA4M2xRTU9yU1BnTmIvVDdxRjBPTEg5WERsZnpVREFoZ2dCRytCYXdrWHM1allmYVRqTG83TUlqeFM1dm91SVFUNHJURnpSOXBrcFRqbGlESVM5bkNVYzBUdzJxUGJuWnFRaGtqNWZQdGFoS2lqa3dmNnZSUmllNnBvU3Rtbm9XZDI4QzlTZUlBdnZ6d3R0eit6SUFkR1NnYjdOdnZyT3J6RT0iLCJtYWMiOiI5NDI0ZjY0ODVlMzc5NTM4YzMwNzAwNGIxNGQ0MTU1OGIzZTIwNjAyM2I2ZGJhNWNhZmVkOTM4YjM4ZDk0ZDgxIiwidGFnIjoiIn0%3D; dropdown_skills=true; gawain_lancelot=c2b585bif73c; XSRF-TOKEN=eyJpdiI6IlVOM0d0RE9wcjdQNCtlVXh6MEtSb3c9PSIsInZhbHVlIjoiV0tUZ2cxaEcwMDhGRS9xbDEvSDJlcWFnbXQxT0d1NGZLeitDdUpGUTRjZEhsM1oxK21aVEJ3V1VqR1NFY0IyNVNUSkZHdzdnc0JKelMyQ3BKMityV0FMSGd5T2tSWlBEaU5YT05BQWlXU0MxM3pNenNkaEhBQjlmU1BwSk1SaGgiLCJtYWMiOiI5ZDFkOGEyNzFhYzEwZjY2MjE5MGYwNTgyYWQxYWYyMWMyMjA2NGNkMTkyYzE3NjYzYzlkNDY5MDVlOGMwNmMzIiwidGFnIjoiIn0%3D; idlemmo_session=eyJpdiI6IjZHUU13Z1k3VXRnN2pSK3FqYXlHOEE9PSIsInZhbHVlIjoiU3NDK1d4c3o2VVpOYkQ2NEwraWpyM1hkRlZuNUV4Sm40R0NPWW02OGE5a2hIa2p4dG9IRTliUGUvZUpZUW16UC90WjBWQUJyMk9OTDFXTVVXRDhKUjRxTU5tZzhDZnRIVVR2ZFN0WDJ3WW5MZlVaNVNMT3R4cHhtaVcvUkRBNmEiLCJtYWMiOiI3MTQxMjVmY2YxMDllZDRiZDcwZTA3NmMzYWY4NzllZjhmMTNhMmZiNDUyOTRjYjUxYjYzM2RkNmMzYzc3YWY5IiwidGFnIjoiIn0%3D",
        "Referer": "https://web.idle-mmo.com/@HackerInside",
        "Referrer-Policy": "strict-origin-when-cross-origin"
      },
      "body": "{\"skill_item_id\":16,\"quantity\":166,\"ts2mic5ytx\":\"U1Jb\",\"qty6bx4peh\":\"U1Bb\",\"v\":\"1.0.0.1\"}",
      "method": "POST"
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

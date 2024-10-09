var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/@RyzenRenoir', async function (req, res, next) {
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
  console.log(switchAcc);
  const reset = await fetch("https://web.idle-mmo.com/api/skills/start?expires=1728569698&signature=c398135e0d7157f3efac027046022f47f6b153bc457ea466bda8e73c0f584a46", {
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
      "cookie": "dismissed_announcements=3; gawain_lancelot=c2b585bif73c; remember_web_59ba36addc2b2f9401580f014c7f58ea4e30989d=eyJpdiI6Ikp1c29CVjVsV1ZQVDhmTS9NTnlXdGc9PSIsInZhbHVlIjoiUGcyRnpXRmJmZDJ3bVdQOTJkN2VlUEJtemZ3SlNRNkJDTGc2MzhJMDc1bGprR3RkZG9zUENqWWhQa3FVdVA4My9xdmdrV0hscjA4M2xRTU9yU1BnTmIvVDdxRjBPTEg5WERsZnpVREFoZ2dCRytCYXdrWHM1allmYVRqTG83TUlqeFM1dm91SVFUNHJURnpSOXBrcFRqbGlESVM5bkNVYzBUdzJxUGJuWnFRaGtqNWZQdGFoS2lqa3dmNnZSUmllNnBvU3Rtbm9XZDI4QzlTZUlBdnZ6d3R0eit6SUFkR1NnYjdOdnZyT3J6RT0iLCJtYWMiOiI5NDI0ZjY0ODVlMzc5NTM4YzMwNzAwNGIxNGQ0MTU1OGIzZTIwNjAyM2I2ZGJhNWNhZmVkOTM4YjM4ZDk0ZDgxIiwidGFnIjoiIn0%3D; dropdown_skills=true; XSRF-TOKEN=eyJpdiI6IjZNVnhuL0ZpQXNUOFU1Y1BRTlU1Y0E9PSIsInZhbHVlIjoic0xvZHgwTnZ6WlFFMktxWDZzMitGTGhqUmRHRXBhOE01M1V5bFc1OWo5Sy9OWjJQUko0QXdhYTBFTWliekpYSCtGbWN3UHRoZFFwelpycXV3SjJ3WU1sR0w3anJFOVRQdkNBYjJ5Vi9pOEdsUlpXT3NaTExPY3lBS3NlVFhBaWMiLCJtYWMiOiI2NzEzY2I4MzU5ODBmNGY2MGU0ZjQ1NzY0NmMyMzhmYzk4NTNlMTgzNDVlNWU4MzA5MTNhMjMyZTIwZWNmODBlIiwidGFnIjoiIn0%3D; idlemmo_session=eyJpdiI6IkhsaGFjT3NFM2l6QTl5cWlvM08vTXc9PSIsInZhbHVlIjoiTzg1YzVTYVJBZitDeGZvL1JFYzFlVHl2dnVtc1BpcVUvOExHLzNxR3podlBocndtaEtIdFVtdmExNWdLTUJBMllEdzY5NmNKNFB0bjdZTFlHYjRpUEFIUlN0VXZmRkdnWG5ETFpNUk9TYW1WRVF5bU53amxubXNjZ0tONzBDTmkiLCJtYWMiOiJmMGVkODRkZWE1Yzg3ZDk0Yzg0Yzg2MmEwNDk4MjZkNWYzMTU3MzZjMDgwMDg4Nzc1NWMwNDA3OWVkYmIyYTA2IiwidGFnIjoiIn0%3D",
      "Referer": "https://web.idle-mmo.com/skills/view/mining",
      "Referrer-Policy": "strict-origin-when-cross-origin"
    },
    "body": "{\"skill_item_id\":15,\"quantity\":170,\"ts2mic5ytx\":\"UlJR\",\"qty6bx4peh\":\"VFBZ\",\"v\":\"1.0.0.1\"}",
    "method": "POST"
  });
  console.log(reset);

  return res.json({ message: 'Welcome to the Idlemmo API' });
});

router.get('/@HackerInside', async function (req, res, next) {
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
  console.log(switchAcc);
  const reset = await fetch("https://web.idle-mmo.com/api/skills/start?expires=1728569698&signature=c398135e0d7157f3efac027046022f47f6b153bc457ea466bda8e73c0f584a46", {
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
      "cookie": "dismissed_announcements=3; gawain_lancelot=c2b585bif73c; remember_web_59ba36addc2b2f9401580f014c7f58ea4e30989d=eyJpdiI6Ikp1c29CVjVsV1ZQVDhmTS9NTnlXdGc9PSIsInZhbHVlIjoiUGcyRnpXRmJmZDJ3bVdQOTJkN2VlUEJtemZ3SlNRNkJDTGc2MzhJMDc1bGprR3RkZG9zUENqWWhQa3FVdVA4My9xdmdrV0hscjA4M2xRTU9yU1BnTmIvVDdxRjBPTEg5WERsZnpVREFoZ2dCRytCYXdrWHM1allmYVRqTG83TUlqeFM1dm91SVFUNHJURnpSOXBrcFRqbGlESVM5bkNVYzBUdzJxUGJuWnFRaGtqNWZQdGFoS2lqa3dmNnZSUmllNnBvU3Rtbm9XZDI4QzlTZUlBdnZ6d3R0eit6SUFkR1NnYjdOdnZyT3J6RT0iLCJtYWMiOiI5NDI0ZjY0ODVlMzc5NTM4YzMwNzAwNGIxNGQ0MTU1OGIzZTIwNjAyM2I2ZGJhNWNhZmVkOTM4YjM4ZDk0ZDgxIiwidGFnIjoiIn0%3D; dropdown_skills=true; XSRF-TOKEN=eyJpdiI6IjZNVnhuL0ZpQXNUOFU1Y1BRTlU1Y0E9PSIsInZhbHVlIjoic0xvZHgwTnZ6WlFFMktxWDZzMitGTGhqUmRHRXBhOE01M1V5bFc1OWo5Sy9OWjJQUko0QXdhYTBFTWliekpYSCtGbWN3UHRoZFFwelpycXV3SjJ3WU1sR0w3anJFOVRQdkNBYjJ5Vi9pOEdsUlpXT3NaTExPY3lBS3NlVFhBaWMiLCJtYWMiOiI2NzEzY2I4MzU5ODBmNGY2MGU0ZjQ1NzY0NmMyMzhmYzk4NTNlMTgzNDVlNWU4MzA5MTNhMjMyZTIwZWNmODBlIiwidGFnIjoiIn0%3D; idlemmo_session=eyJpdiI6IkhsaGFjT3NFM2l6QTl5cWlvM08vTXc9PSIsInZhbHVlIjoiTzg1YzVTYVJBZitDeGZvL1JFYzFlVHl2dnVtc1BpcVUvOExHLzNxR3podlBocndtaEtIdFVtdmExNWdLTUJBMllEdzY5NmNKNFB0bjdZTFlHYjRpUEFIUlN0VXZmRkdnWG5ETFpNUk9TYW1WRVF5bU53amxubXNjZ0tONzBDTmkiLCJtYWMiOiJmMGVkODRkZWE1Yzg3ZDk0Yzg0Yzg2MmEwNDk4MjZkNWYzMTU3MzZjMDgwMDg4Nzc1NWMwNDA3OWVkYmIyYTA2IiwidGFnIjoiIn0%3D",
      "Referer": "https://web.idle-mmo.com/skills/view/mining",
      "Referrer-Policy": "strict-origin-when-cross-origin"
    },
    "body": "{\"skill_item_id\":15,\"quantity\":170,\"ts2mic5ytx\":\"UlJR\",\"qty6bx4peh\":\"VFBZ\",\"v\":\"1.0.0.1\"}",
    "method": "POST"
  });
  console.log(reset);

  return res.json({ message: 'Welcome to the Idlemmo API' });
});

module.exports = router;

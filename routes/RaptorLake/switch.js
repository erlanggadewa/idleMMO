async function switchRaptor() {
  return await fetch("https://web.idle-mmo.com/user/character/switch/382647", {
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
      "cookie": "dismissed_announcements=3; remember_web_59ba36addc2b2f9401580f014c7f58ea4e30989d=eyJpdiI6Ikp1c29CVjVsV1ZQVDhmTS9NTnlXdGc9PSIsInZhbHVlIjoiUGcyRnpXRmJmZDJ3bVdQOTJkN2VlUEJtemZ3SlNRNkJDTGc2MzhJMDc1bGprR3RkZG9zUENqWWhQa3FVdVA4My9xdmdrV0hscjA4M2xRTU9yU1BnTmIvVDdxRjBPTEg5WERsZnpVREFoZ2dCRytCYXdrWHM1allmYVRqTG83TUlqeFM1dm91SVFUNHJURnpSOXBrcFRqbGlESVM5bkNVYzBUdzJxUGJuWnFRaGtqNWZQdGFoS2lqa3dmNnZSUmllNnBvU3Rtbm9XZDI4QzlTZUlBdnZ6d3R0eit6SUFkR1NnYjdOdnZyT3J6RT0iLCJtYWMiOiI5NDI0ZjY0ODVlMzc5NTM4YzMwNzAwNGIxNGQ0MTU1OGIzZTIwNjAyM2I2ZGJhNWNhZmVkOTM4YjM4ZDk0ZDgxIiwidGFnIjoiIn0%3D; gawain_lancelot=c2b585bif73c; dropdown_skills=true; XSRF-TOKEN=eyJpdiI6Ik1oZ1hyWnlUeTFzNWNDR2dSWnVYVXc9PSIsInZhbHVlIjoiUWVxV0syaFEzSDZ1VmJqU0N6WlVMZmlrOGVjd1FGeGRoL3k0bUg5OFpYSUtwaXJ6ejcvTE92dE9oS1lEVnBLamdoakdtemdXejk3R2pkVXREdEdKd0JicUR3Nmd2MElkMkpIdGFyZ1BHRC80ci9Ja3Z6cEk3cnlpVWZSSGxQZTciLCJtYWMiOiI1MDQyNTY2NGIxMjdhN2YyYWIyNjM1MTZkMTVjYmNlZTZmYTM2ZDI5ZDI5ODFkOTE1NDdmZDY2ZDFjZDRmNTE4IiwidGFnIjoiIn0%3D; idlemmo_session=eyJpdiI6IjZJaEI4bytLRWp1SlE4YlNGSmp2ZEE9PSIsInZhbHVlIjoiUjUyaVpraVRQdTBFMWpqakUvRlgzL2lpTit3MW16T2x0eEtrSlFhdDliMmV4N0pkSnJIdVVrWGdLV3pUOGljSkdIYmNCeVVLZDJvREduN0lucDJBRDJ0K3dlK2FJREYwSHg2bkdrYjNseXhUWnRiejJvdFl5UE9admNRZmxWMVYiLCJtYWMiOiI5OWI1NDlmOWNmOTUzZTRjYmYwMDZhNWEyNmQwMDIzODZhY2I4YTFkMmRhMDYyOGU4YmI0ZjMyOGY5NTAwYmI2IiwidGFnIjoiIn0%3D",
      "Referer": "https://web.idle-mmo.com/@RyzenRenoir",
      "Referrer-Policy": "strict-origin-when-cross-origin"
    },
    "body": "_token=jUEBCi1OJtTHPid21br41LRv3ipqJ1TnCTW5WlYn&return_to_current_page=false",
    "method": "POST"
  });
}

module.exports = switchRaptor;

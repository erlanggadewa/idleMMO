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
      "cookie": "dismissed_announcements=3; remember_web_59ba36addc2b2f9401580f014c7f58ea4e30989d=eyJpdiI6Ikp1c29CVjVsV1ZQVDhmTS9NTnlXdGc9PSIsInZhbHVlIjoiUGcyRnpXRmJmZDJ3bVdQOTJkN2VlUEJtemZ3SlNRNkJDTGc2MzhJMDc1bGprR3RkZG9zUENqWWhQa3FVdVA4My9xdmdrV0hscjA4M2xRTU9yU1BnTmIvVDdxRjBPTEg5WERsZnpVREFoZ2dCRytCYXdrWHM1allmYVRqTG83TUlqeFM1dm91SVFUNHJURnpSOXBrcFRqbGlESVM5bkNVYzBUdzJxUGJuWnFRaGtqNWZQdGFoS2lqa3dmNnZSUmllNnBvU3Rtbm9XZDI4QzlTZUlBdnZ6d3R0eit6SUFkR1NnYjdOdnZyT3J6RT0iLCJtYWMiOiI5NDI0ZjY0ODVlMzc5NTM4YzMwNzAwNGIxNGQ0MTU1OGIzZTIwNjAyM2I2ZGJhNWNhZmVkOTM4YjM4ZDk0ZDgxIiwidGFnIjoiIn0%3D; gawain_lancelot=c2b585bif73c; dropdown_skills=true; XSRF-TOKEN=eyJpdiI6Inp2MVp1d0w3QXlJcGhuN0dhcnhvN3c9PSIsInZhbHVlIjoieGJBYXhObjRzOUlQb3oxQ3FNVUxPaFVpcW42RlNjOGd4bzY3Y25XMjJPelYybXphWmJUN01HTXZSczhJTUljeVNHSHhOc0F2OG45NCtJUkhETXpOSDNZUmtNZ2NlbUlIR3c2SHgxMzI4cnA3TzdFSW44cXhrN1hYNUJZd3F5RmoiLCJtYWMiOiJmYTZiNzk3NTMwNThkNTI3NzQwODUwNzdlMTNhMjU2OTUzYTY1YWE4YzdmOWU1NWM3NzRiNTAwYjkyODQ5ODE1IiwidGFnIjoiIn0%3D; idlemmo_session=eyJpdiI6ImwrS1I2aFV2a3NhS1V2Y0NwOGRCb3c9PSIsInZhbHVlIjoiMVo5K2tuWEhSTTZ5K0o0dWlhRGs5eEl0NCsyVEF1Ym9nSi95UWZHU1hJemNVOFF3VXNiV2QxeE1BN3NTeTJMMzU0RzNySXBIcXN4N3hjODMvTzhuSjcwVjJzSVlLNXVzNkNlcnFrZkhlM1phV0FYOFpOK3U4N2c1elBjVjQ3Z0EiLCJtYWMiOiIzZGEwNzQxZmJmOTgyNGYxZDlhMGM5MmJmZWQxZjQxNTU5YjU2ZTNlMzI1NWNiZTBjMWJkNjZkZWY2MDcwNWRmIiwidGFnIjoiIn0%3D",
      "Referer": "https://web.idle-mmo.com/@RyzenRenoir",
      "Referrer-Policy": "strict-origin-when-cross-origin"
    },
    "body": "_token=jUEBCi1OJtTHPid21br41LRv3ipqJ1TnCTW5WlYn&return_to_current_page=false",
    "method": "POST"
  });
}

module.exports = switchRaptor;

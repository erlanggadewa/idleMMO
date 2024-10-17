async function switchHacker() {
  return await fetch("https://web.idle-mmo.com/user/character/switch/366997", {
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
      "cookie": "dismissed_announcements=3; remember_web_59ba36addc2b2f9401580f014c7f58ea4e30989d=eyJpdiI6Ikp1c29CVjVsV1ZQVDhmTS9NTnlXdGc9PSIsInZhbHVlIjoiUGcyRnpXRmJmZDJ3bVdQOTJkN2VlUEJtemZ3SlNRNkJDTGc2MzhJMDc1bGprR3RkZG9zUENqWWhQa3FVdVA4My9xdmdrV0hscjA4M2xRTU9yU1BnTmIvVDdxRjBPTEg5WERsZnpVREFoZ2dCRytCYXdrWHM1allmYVRqTG83TUlqeFM1dm91SVFUNHJURnpSOXBrcFRqbGlESVM5bkNVYzBUdzJxUGJuWnFRaGtqNWZQdGFoS2lqa3dmNnZSUmllNnBvU3Rtbm9XZDI4QzlTZUlBdnZ6d3R0eit6SUFkR1NnYjdOdnZyT3J6RT0iLCJtYWMiOiI5NDI0ZjY0ODVlMzc5NTM4YzMwNzAwNGIxNGQ0MTU1OGIzZTIwNjAyM2I2ZGJhNWNhZmVkOTM4YjM4ZDk0ZDgxIiwidGFnIjoiIn0%3D; gawain_lancelot=c2b585bif73c; dropdown_skills=true; XSRF-TOKEN=eyJpdiI6Ijc4SjIvZUdINUUwY2xYL3ZXbm9ZblE9PSIsInZhbHVlIjoidnQvdFFGWjhLSDlrNzZZcUczNlVnc1NTM2JqMVQzR3lnRGJPS3ovOFhCdXhVMWM1T1VJUkMvdjQxOGw1U3dvalE4Smx5L2hNb3JDcERnWTFNY1kxb0pZSEoxeWdtaXNyd1hNZ0JDTTZVTlcxdi9oNWduamZ6dllUTkozNXBkZnQiLCJtYWMiOiIzOTViYjNhMWU5YmQ1ZTNmYjU0YzM0NDQ0NWQ2NzRmNzIyZDU4OGFhYWMyY2QxZmE0ZmZiY2FhNTQ5OGFkY2ZjIiwidGFnIjoiIn0%3D; idlemmo_session=eyJpdiI6IkJ5THduMitBU1pwZkdxdVRVdzZ1T0E9PSIsInZhbHVlIjoiczBnQkx0Mk1ndUR2TEV0UmlFUGlMOVpTZkdYd1Z5cFZBWi9rdjMrSEhFZmlMZGlQMWNZS3dRaVNwdmNHUHRoQWF0cEVlOWVtaE82S05nTlNKOHhwYTllcTJPNXl3T0tMcGhmcDhpaC85RFpWT1NxNTRSQVlzNTE4a1NhRS9QMTYiLCJtYWMiOiJkZWE2YzEwOGNlMDExNjdhZWFiNTJmYWJmZTEwY2I1ODgyNjkwNzA0ZjljMjVlNTk5ZmNjNTQ4ZmU0MDc2OTE4IiwidGFnIjoiIn0%3D",
      "Referer": "https://web.idle-mmo.com/@RyzenRenoir",
      "Referrer-Policy": "strict-origin-when-cross-origin"
    },
    "body": "_token=g19ZZIkIPVjDNmvlK7pjCF0SS9SNUIAt25SeMgMk&return_to_current_page=false",
    "method": "POST"
  });
}

module.exports = switchHacker;

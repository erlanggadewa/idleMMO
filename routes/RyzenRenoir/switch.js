async function switchRyzen() {
  return await fetch("https://web.idle-mmo.com/user/character/switch/367161", {
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
      "cookie": "dismissed_announcements=3; remember_web_59ba36addc2b2f9401580f014c7f58ea4e30989d=eyJpdiI6Ikp1c29CVjVsV1ZQVDhmTS9NTnlXdGc9PSIsInZhbHVlIjoiUGcyRnpXRmJmZDJ3bVdQOTJkN2VlUEJtemZ3SlNRNkJDTGc2MzhJMDc1bGprR3RkZG9zUENqWWhQa3FVdVA4My9xdmdrV0hscjA4M2xRTU9yU1BnTmIvVDdxRjBPTEg5WERsZnpVREFoZ2dCRytCYXdrWHM1allmYVRqTG83TUlqeFM1dm91SVFUNHJURnpSOXBrcFRqbGlESVM5bkNVYzBUdzJxUGJuWnFRaGtqNWZQdGFoS2lqa3dmNnZSUmllNnBvU3Rtbm9XZDI4QzlTZUlBdnZ6d3R0eit6SUFkR1NnYjdOdnZyT3J6RT0iLCJtYWMiOiI5NDI0ZjY0ODVlMzc5NTM4YzMwNzAwNGIxNGQ0MTU1OGIzZTIwNjAyM2I2ZGJhNWNhZmVkOTM4YjM4ZDk0ZDgxIiwidGFnIjoiIn0%3D; gawain_lancelot=c2b585bif73c; dropdown_skills=true; XSRF-TOKEN=eyJpdiI6InFnd25OS3hBUHBYQXhubmF3bkZxL1E9PSIsInZhbHVlIjoiMzNHb0o5ZGNKMDQvdnZtREJxNXhjVjVpaVpnZ21HeC84eDZDMnk0TmVySGVpeWcrVjU1T3ZlVG95MlRTT3d3d1BYOGZBbGJqampJVDlHSnh3U1NCdXU3RFdlaFJnV29QakpIQTlKWHMxUFZQaGRtc20wRThwckR1bGluMWs2Z3YiLCJtYWMiOiJmOTAyNTUyMmYyNmNhZDhiZDZkNWE2MmU2ZGVkYTA0ODU2NDE0ZDQ0YzBlYzI1NjU5ZmU4ZmJmMDE0ZDEwMWE5IiwidGFnIjoiIn0%3D; idlemmo_session=eyJpdiI6IkhZSTMrK0UwQ0QramJrNHNzVk9pcVE9PSIsInZhbHVlIjoiMEw5RDFLTURMTi8wanJ5VUxNRWllMGZoWGErVlNEWjdKRTZhMUJ2QlVNdWZTaGRWZmg0Qm9Idjk5ZnVNUnhXZnF3TFFaWE1aNlBnNldJQW1YTDdXL245U0dxVGxCekVIVFZyM0RIVGxWV2ptRGtDc3A3Nm8xU3JFVDRhb2pFcWciLCJtYWMiOiIyMDk4NzZkZmM4MzA3MTFlYTM5MzVlZmJjYTA0ZDBkYjc0ZWQ0ODNiYTUwZjY1MDVjMjk3ZDM5NDdjZDc4NzMwIiwidGFnIjoiIn0%3D",
      "Referer": "https://web.idle-mmo.com/@RaptorLake",
      "Referrer-Policy": "strict-origin-when-cross-origin"
    },
    "body": "_token=jUEBCi1OJtTHPid21br41LRv3ipqJ1TnCTW5WlYn&return_to_current_page=false",
    "method": "POST"
  });
}

module.exports = switchRyzen;

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
      "cookie": "dismissed_announcements=3; remember_web_59ba36addc2b2f9401580f014c7f58ea4e30989d=eyJpdiI6Ikp1c29CVjVsV1ZQVDhmTS9NTnlXdGc9PSIsInZhbHVlIjoiUGcyRnpXRmJmZDJ3bVdQOTJkN2VlUEJtemZ3SlNRNkJDTGc2MzhJMDc1bGprR3RkZG9zUENqWWhQa3FVdVA4My9xdmdrV0hscjA4M2xRTU9yU1BnTmIvVDdxRjBPTEg5WERsZnpVREFoZ2dCRytCYXdrWHM1allmYVRqTG83TUlqeFM1dm91SVFUNHJURnpSOXBrcFRqbGlESVM5bkNVYzBUdzJxUGJuWnFRaGtqNWZQdGFoS2lqa3dmNnZSUmllNnBvU3Rtbm9XZDI4QzlTZUlBdnZ6d3R0eit6SUFkR1NnYjdOdnZyT3J6RT0iLCJtYWMiOiI5NDI0ZjY0ODVlMzc5NTM4YzMwNzAwNGIxNGQ0MTU1OGIzZTIwNjAyM2I2ZGJhNWNhZmVkOTM4YjM4ZDk0ZDgxIiwidGFnIjoiIn0%3D; gawain_lancelot=c2b585bif73c; dropdown_skills=true; XSRF-TOKEN=eyJpdiI6ImpaQm83VG1HMEJvR2JaUHY1ckxkdUE9PSIsInZhbHVlIjoiQkJVSU1odkJ0TUlNTi9EK0JISDIya2R2d3hneXdqbWhzemh5enlOa0tuNnJoaWx0NmFlSzMweDRXM3VkUVNCZHl5RXpWRnN4aTRYWThxTGpQaE1jUUp4ZDByRkNwYmlmVlk4cmh5M1BUU3hUNXhscjU5dG5xTEE5U2ZWTFVya3MiLCJtYWMiOiI2YjBjOWYwMTA0YjE4MzNmMWU3OGZlMDE2MDYwOWI5ZTY1MWQyMmZiMmQ1MjI5YmFkNjhkOWU2YjQ4M2Y5NGJhIiwidGFnIjoiIn0%3D; idlemmo_session=eyJpdiI6IkZ4VkpLc2VEVFRvZEJlaGZZMllBQUE9PSIsInZhbHVlIjoiUUlQS0daV29DNVEvTmd4Yk1YMnFBZXR4RmFIOWl5aElad2F0V3hsQURIdzhlR3J3eFNUVkoyZDlIbFBaZE15VE50Z0QwTmJhRjN2cnExMVgraVVOajRodUt5SmpQUkxoR3B1UmJsaEcycjNvaWhnMElQSTZXL2J3NzNFVkNjZDQiLCJtYWMiOiI5OTIyNmQ3YTgwMWYxNjNhMWU4NDBkNTUwZjE0NzU4ZjJkMzk1NGE3Y2Y0YzBkOTg0YjMyNWRkYjE1Y2JjNzk2IiwidGFnIjoiIn0%3D",
      "Referer": "https://web.idle-mmo.com/@RyzenRenoir",
      "Referrer-Policy": "strict-origin-when-cross-origin"
    },
    "body": "_token=jUEBCi1OJtTHPid21br41LRv3ipqJ1TnCTW5WlYn&return_to_current_page=false",
    "method": "POST"
  });
}

module.exports = switchHacker;

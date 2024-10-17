async function switchRyzen() {
  return fetch("https://web.idle-mmo.com/user/character/switch/367161", {
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
      "cookie": "dismissed_announcements=3; remember_web_59ba36addc2b2f9401580f014c7f58ea4e30989d=eyJpdiI6Ikp1c29CVjVsV1ZQVDhmTS9NTnlXdGc9PSIsInZhbHVlIjoiUGcyRnpXRmJmZDJ3bVdQOTJkN2VlUEJtemZ3SlNRNkJDTGc2MzhJMDc1bGprR3RkZG9zUENqWWhQa3FVdVA4My9xdmdrV0hscjA4M2xRTU9yU1BnTmIvVDdxRjBPTEg5WERsZnpVREFoZ2dCRytCYXdrWHM1allmYVRqTG83TUlqeFM1dm91SVFUNHJURnpSOXBrcFRqbGlESVM5bkNVYzBUdzJxUGJuWnFRaGtqNWZQdGFoS2lqa3dmNnZSUmllNnBvU3Rtbm9XZDI4QzlTZUlBdnZ6d3R0eit6SUFkR1NnYjdOdnZyT3J6RT0iLCJtYWMiOiI5NDI0ZjY0ODVlMzc5NTM4YzMwNzAwNGIxNGQ0MTU1OGIzZTIwNjAyM2I2ZGJhNWNhZmVkOTM4YjM4ZDk0ZDgxIiwidGFnIjoiIn0%3D; gawain_lancelot=c2b585bif73c; dropdown_skills=true; XSRF-TOKEN=eyJpdiI6IjNIazFmc2RiaFJtdHRYWGVHUEx5bWc9PSIsInZhbHVlIjoiQ01SWm1oMEJBaVJCdjY3ZnZDc0xEMktDWldWdlBJOGVEWGlKSTM4WXNKS3RmV0FZOThWTFE4c3hha3Q0OTM1MHV5TmVJSFlaK1A3VFdoOTVNbUF2UUZaem5tNU5FV1FlVGQ2NDBqTWNRY2M5ajdSL3BYWExwUWhhTHFsWVJKd1QiLCJtYWMiOiIxNjk1NDAyMzNmNmZiNTAyNTg4YTg5Y2RhNzVjZTA5NmJmYzkxNjViMTJjN2RjYTk1NTQ4MTZiNGE4YTk5MmEzIiwidGFnIjoiIn0%3D; idlemmo_session=eyJpdiI6IkJDeFkzZWg1ei90RVZhdWxJdkhhRHc9PSIsInZhbHVlIjoiTkFhdllIdk9xNHFIRGJYVCtDcm9Yd0ZURVhkVlJ4L2FlTUNNZUpmVm9oU2t2TWlGaS85bk4zc3A5S21idGlhaDZpbzNiWWtNMENDcVNuemxIaTN3blhELzhEZC9YaEM1QWtMTzNnY1kyVktqSWNUN0F1dU16eGZIVXVTZWllOVciLCJtYWMiOiIwNDU4MmUzODRjMjkzY2JhOWQ1OWQ1MzRkNmQ2NzBiZDI2NDhiMTQ2YTU0ZjI5NmM2ZTE0MDU3MzBmZTgzMjY2IiwidGFnIjoiIn0%3D",
      "Referer": "https://web.idle-mmo.com/@HackerInside",
      "Referrer-Policy": "strict-origin-when-cross-origin"
    },
    "body": "_token=g19ZZIkIPVjDNmvlK7pjCF0SS9SNUIAt25SeMgMk&return_to_current_page=false",
    "method": "POST"
  });
}

module.exports = switchRyzen;

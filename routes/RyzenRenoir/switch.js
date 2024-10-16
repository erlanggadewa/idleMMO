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
      "cookie": "dismissed_announcements=3; remember_web_59ba36addc2b2f9401580f014c7f58ea4e30989d=eyJpdiI6Ikp1c29CVjVsV1ZQVDhmTS9NTnlXdGc9PSIsInZhbHVlIjoiUGcyRnpXRmJmZDJ3bVdQOTJkN2VlUEJtemZ3SlNRNkJDTGc2MzhJMDc1bGprR3RkZG9zUENqWWhQa3FVdVA4My9xdmdrV0hscjA4M2xRTU9yU1BnTmIvVDdxRjBPTEg5WERsZnpVREFoZ2dCRytCYXdrWHM1allmYVRqTG83TUlqeFM1dm91SVFUNHJURnpSOXBrcFRqbGlESVM5bkNVYzBUdzJxUGJuWnFRaGtqNWZQdGFoS2lqa3dmNnZSUmllNnBvU3Rtbm9XZDI4QzlTZUlBdnZ6d3R0eit6SUFkR1NnYjdOdnZyT3J6RT0iLCJtYWMiOiI5NDI0ZjY0ODVlMzc5NTM4YzMwNzAwNGIxNGQ0MTU1OGIzZTIwNjAyM2I2ZGJhNWNhZmVkOTM4YjM4ZDk0ZDgxIiwidGFnIjoiIn0%3D; dropdown_skills=true; gawain_lancelot=c2b585bif73c; XSRF-TOKEN=eyJpdiI6Ik9UT2lNNVNlSWZiYjR3OFpTNHVxV3c9PSIsInZhbHVlIjoiUmJWUGhxaVpCb0NPZEg1Y2RYQlNWRmxSbkx3aERhRzF4ajFiNFJzYjY0RTY3b0pvcSsyOEJobUxHMk5rRnJvbm9tUS8xamRBbWNzK3JDbnF0blUrcGR6b0d1YTJxNFI2TVllS0xWWWsvZVRFY05TU0ZDWjN3UkJxVDB0SThGTkEiLCJtYWMiOiI3OGVkZjIyMjY2ZjQxNDc1NTQzMWIxZjQ0OThkMGI0YTVkMjY3MTNkZTQzYjgyOWU3ZGJmZmM0NjUwZjIyYzExIiwidGFnIjoiIn0%3D; idlemmo_session=eyJpdiI6IjE0NkxsZWV2alpaTTZkbGUxN2NVRFE9PSIsInZhbHVlIjoiNUxoSGh2M3BWVlQzdSs5RXBNdStHV2lmOHo1anEydzNGVktreEtTbjg1d0FQbC90OW5XUTVnR2tpeElYc1NtM2ZZN3M5Y1k0UnZNeFF0VDZRaDJMY0p0MGoyTXByaU1mdGRxQkxSemFwdjBkd0RVbzRGZlI0VytoRmM3MnVCb04iLCJtYWMiOiJhYjBhZjU5NTE4YTAwMDg5NjRmZDk0YzhhNTkzYmNlOTdkZTBhNDI4OTAyNmRhZGNhZDRlM2FlNDJhYmMxMGRjIiwidGFnIjoiIn0%3D",
      "Referer": "https://web.idle-mmo.com/@HackerInside",
      "Referrer-Policy": "strict-origin-when-cross-origin"
    },
    "body": "_token=o8VnuHgnrOfrA4KeADxh2zRvgGml1M4eHfTyjAh7",
    "method": "POST"
  });
}

module.exports = switchRyzen;

async function miningRaptor() {
  return await fetch("https://web.idle-mmo.com/api/skills/start?expires=1729181987&signature=ea61af137962331d3c20245ce2f229e26a69cbdc86b5b1d0a2718e8e3cc1ce0a", {
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
      "cookie": "dismissed_announcements=3; remember_web_59ba36addc2b2f9401580f014c7f58ea4e30989d=eyJpdiI6Ikp1c29CVjVsV1ZQVDhmTS9NTnlXdGc9PSIsInZhbHVlIjoiUGcyRnpXRmJmZDJ3bVdQOTJkN2VlUEJtemZ3SlNRNkJDTGc2MzhJMDc1bGprR3RkZG9zUENqWWhQa3FVdVA4My9xdmdrV0hscjA4M2xRTU9yU1BnTmIvVDdxRjBPTEg5WERsZnpVREFoZ2dCRytCYXdrWHM1allmYVRqTG83TUlqeFM1dm91SVFUNHJURnpSOXBrcFRqbGlESVM5bkNVYzBUdzJxUGJuWnFRaGtqNWZQdGFoS2lqa3dmNnZSUmllNnBvU3Rtbm9XZDI4QzlTZUlBdnZ6d3R0eit6SUFkR1NnYjdOdnZyT3J6RT0iLCJtYWMiOiI5NDI0ZjY0ODVlMzc5NTM4YzMwNzAwNGIxNGQ0MTU1OGIzZTIwNjAyM2I2ZGJhNWNhZmVkOTM4YjM4ZDk0ZDgxIiwidGFnIjoiIn0%3D; dropdown_skills=true; gawain_lancelot=c2b585bif73c; XSRF-TOKEN=eyJpdiI6Ilc0L3hoQ1RyT3NzTDZwR08vdWQ0ZEE9PSIsInZhbHVlIjoiMGVOWDFhYkg5cFp4b3B0UWpSUDFqdGpmU1IyRXJIbDl0c1NzSmNpc0xwaXp1YlZNdEFsZ1FLLzFHVGJhT29NOHdKY1cvL2x4bVNUY1NkYTM3dEFvMTlYMStQanVZM01kaUs0WWFHTTNEQWlXdVlzck5uTlptNzVSNjhZRm5nWXMiLCJtYWMiOiI3ZDVjMWI3YTg1MDZhOGI5Njg5M2RkMGZiMTk2ZjdmODA2ZGRjN2M2ZDdkYWYzYzBjMzc5ZjVlY2Y5N2E4MGQzIiwidGFnIjoiIn0%3D; idlemmo_session=eyJpdiI6ImV5NkJ4WGdYcmtLYTlFRENwMGEwMVE9PSIsInZhbHVlIjoiOC9GVkx4TUZzMENKcDRqSFJUMTdTLzltdVcrZG51cVArbXNxcnhxbFYzUlRPMGdIN2lDUE1QWDViMGdrZlluR2NUQ1k3anpxaVo1QlE4emt6UXI0MExpcGg2VmtWSkRQV0xiVUxUUEhBSE94dkxOYURBczlOZCs4dlc0dEFlNzkiLCJtYWMiOiIyODJhNTAxY2JmNDljYjQ2NzM5N2RkNjllNzQ4YWQ5YzM1MjY3YmNlY2NkODA2ZWM1ODRkMDRiZGRjYTIxYWZhIiwidGFnIjoiIn0%3D",
      "Referer": "https://web.idle-mmo.com/@RyzenRenoir",
      "Referrer-Policy": "strict-origin-when-cross-origin"
    },
    "body": "{\"skill_item_id\":17,\"quantity\":161,\"ts2mic5ytx\":\"U1Na\",\"qty6bx4peh\":\"U1Jc\",\"v\":\"1.0.0.1\"}",
    "method": "POST"
  });
}

module.exports = miningRaptor;

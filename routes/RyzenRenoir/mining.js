async function miningRyzen() {
  return await fetch("https://web.idle-mmo.com/api/skills/start?expires=1729259326&signature=03bbba450686f32438fe76688dea7f694d54c59062eb25f2dff18465923d82be", {
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
      "cookie": "dismissed_announcements=3; remember_web_59ba36addc2b2f9401580f014c7f58ea4e30989d=eyJpdiI6Ikp1c29CVjVsV1ZQVDhmTS9NTnlXdGc9PSIsInZhbHVlIjoiUGcyRnpXRmJmZDJ3bVdQOTJkN2VlUEJtemZ3SlNRNkJDTGc2MzhJMDc1bGprR3RkZG9zUENqWWhQa3FVdVA4My9xdmdrV0hscjA4M2xRTU9yU1BnTmIvVDdxRjBPTEg5WERsZnpVREFoZ2dCRytCYXdrWHM1allmYVRqTG83TUlqeFM1dm91SVFUNHJURnpSOXBrcFRqbGlESVM5bkNVYzBUdzJxUGJuWnFRaGtqNWZQdGFoS2lqa3dmNnZSUmllNnBvU3Rtbm9XZDI4QzlTZUlBdnZ6d3R0eit6SUFkR1NnYjdOdnZyT3J6RT0iLCJtYWMiOiI5NDI0ZjY0ODVlMzc5NTM4YzMwNzAwNGIxNGQ0MTU1OGIzZTIwNjAyM2I2ZGJhNWNhZmVkOTM4YjM4ZDk0ZDgxIiwidGFnIjoiIn0%3D; gawain_lancelot=c2b585bif73c; dropdown_skills=true; XSRF-TOKEN=eyJpdiI6ImNkb1cxOEc1QmRIaVBoc21nWVNoc1E9PSIsInZhbHVlIjoiVDhCZjlOTFNGdnpEU1ZxWnB3L09iaWYxT2IycGY3dy9SWEFBYnFxdWhvRmpyL2s4d0dqUzF5S1J0RElyM0VmcWFnak1aTEd0NXUzSmhJbHM1Rm1INEtXSGprWEtlVmdZNThJRFBTZGQxUlRkYUp3WlpUcWVpeFkreVBUbVNCeDkiLCJtYWMiOiIyNGY3MDViY2E2MmU1NTg1MDhjZDRhOGQ5NmRkZmEyMzg4MWE3OWM2NDAxMTZhMDVhNjZiNjI3OTBmY2FlZWI1IiwidGFnIjoiIn0%3D; idlemmo_session=eyJpdiI6ImJDamNwZVAzMzhxR3B0VlpnYld0MWc9PSIsInZhbHVlIjoieER6RXNtMmw3ckNBLzA3WkFWVVVOeVFRZUNtWFlUeHRLWHo3QkdZY3J4M2tlQ0JQNVlSOXBqQXJZV0ova0xTQm5rYzVzVTR2ejk1TkdqVUEwQ3VsNjJvVUFJejNRQkNpa0h4Rlk5NXhyc3E1RHNPZzhJNWVQeE4zeDNIVXNlbzQiLCJtYWMiOiI0OWM3MjhhMWViNzhkMjJmMzIyODExNmIzZTJiN2M1Nzk0MWQ2YTIwMDk1NWUyYTRkYmUwYWFhMzRiM2M2MjE2IiwidGFnIjoiIn0%3D",
      "Referer": "https://web.idle-mmo.com/@RyzenRenoir",
      "Referrer-Policy": "strict-origin-when-cross-origin"
    },
    "body": "{\"skill_item_id\":17,\"quantity\":161,\"ts2mic5ytx\":\"VFBY\",\"qty6bx4peh\":\"U1Ra\",\"v\":\"1.0.0.1\"}",
    "method": "POST"
  });
}

module.exports = miningRyzen;

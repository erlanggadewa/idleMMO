async function switchPhoenix() {
  return await fetch("https://web.idle-mmo.com/user/character/switch/384968", {
    "headers": {
      "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
      "accept-language": "en-US,en;q=0.9",
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
      "cookie": "remember_web_59ba36addc2b2f9401580f014c7f58ea4e30989d=eyJpdiI6IlZKekM5QVlNMEZ5bWQ3bmtlcmxOWmc9PSIsInZhbHVlIjoickJMYVRjZmE5QUdFNHZHZUlyaHZhci9GdkUyT3lKWUlBRlRwVzFoQ0IvRHkwRStmUnpTZkVwV3Bmc1BYU1c5WkZyMjV6VjFSdUNHZnFOZ1FKMXBFakd6cWlUaTI0QU9RWFlHT0VEdkFEN1UxaXhqbGFKbklFN2RxR2EvNDUraW0yNW9iSUh1QWxEK1ZuK1dPZk9POTd3bGVwYXVSUnNQQU5FOFlSWkR0aytBODgrd29kNThBR09kby9yNzdyb2xOSHFWb2tGMXdWcXBMTXY1RUJuNG40SHYwMTdzd0hQNlZJa09zaWt1d0xQcz0iLCJtYWMiOiJmNDFjMTE2YzJlYjQzOTg2MmU5NGQ4YTI1Mzk0ZWFlNWY1YjIzZmQ5ZGQ2NTdiYjUxNTliZWIwZWZjM2MxNGEwIiwidGFnIjoiIn0%3D; gawain_lancelot=h535i997a305; dismissed_announcements=3; XSRF-TOKEN=eyJpdiI6IkNDaC85UWRrS3dEZnpBWGtMSzZwd1E9PSIsInZhbHVlIjoibWZZekhhcmEyV002aG5ad240WU9pbUFKMWExRTM0QUJERlRBTnIrWDZrTGxZK014NlA1eURkS3RZbUpYRHlqRUQ4cmpuL1dLZVJDTTFka1M3U3lqcGVIZ3ZDTGltUVpWU1RBRmYrbmZTbXo5L3lFbzlmYWptWldKZmc5UTZXTWMiLCJtYWMiOiIxMGRkNzk2Y2VkOGE3ZDM5MWE2MWQ3MmQ1ZDJhNzc2M2YxODRlMTA2NWI0ZDdhMWMwYzQwZjY3NWViYjBkNGIyIiwidGFnIjoiIn0%3D; idlemmo_session=eyJpdiI6IjExSmp3K2NRWGM2dEFJbERCa3JCalE9PSIsInZhbHVlIjoiWDVRYVgrZVNWZm5OTksvNlgrZXFwb2FQM1lzeUU4YW54RFhwanh3bGZsOVdaaUVkS3pJcGJDV21MZjIzU3ZFdm80V3Z4VnFrUThsS0lUTzZma1NlY3Q5WG9PZ2ZPQ0w0aW94azV2MmZHODAzWW9icVlyYXpsVzhkRjFLN1BTc00iLCJtYWMiOiIxMTk3YzEyM2MwNzE5YzAxNGM5YmI0NWZiNTE2N2JmZDQ2OWVhMTMzNDNmNWM0NjYzYTI4YmVmNGJjNDQ2NzEzIiwidGFnIjoiIn0%3D",
      "Referer": "https://web.idle-mmo.com/@RyzenRaphael",
      "Referrer-Policy": "strict-origin-when-cross-origin"
    },
    "body": "_token=Ngpb2lorqmqTB1mIc9qcelogSrFASrimFnNhl7fz&return_to_current_page=false",
    "method": "POST"
  });
}

module.exports = switchPhoenix;

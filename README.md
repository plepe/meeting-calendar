# Meeting Calendar
Include a meeting calendar in a website. It is based on [FullCalendar](https://fullcalendar.io/).

## Installation
```sh
npm add --save meeting-calendar
```

Add to your HTML:
```html
<html>
  <head>
    <link href='node_modules/@fullcalendar/core/main.css' rel='stylesheet' />
    <link href='node_modules/@fullcalendar/timegrid/main.css' rel='stylesheet' />
    <script src='node_modules/meeting-calendar/dist/meeting-calendar.js'></script>
  </head>
  <body>
    <div id='calendar'></div>
    <script>
    meetingCalendar({
      events: 'events.json',
      dom: 'calendar'
    })
    </script>
  </body>
</html>
```

An example `events.json`:
```json
[
  {
    "title": "Day 1",
    "start": "2019-06-26 11:00",
    "end": "2019-06-26 18:00",
    "color": "",
    "textColor": ""
  },
  {
    "title": "Day 2",
    "start": "2019-06-27 09:00",
    "end": "2019-06-27 16:00",
    "color": "red",
    "textColor": ""
  }
]
```

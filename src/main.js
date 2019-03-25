const Calendar = require('@fullcalendar/core').Calendar
const timeGridPlugin = require('@fullcalendar/timegrid').default

let events = require('../events.json')

document.addEventListener('DOMContentLoaded', function() {
  var calendarEl = document.getElementById('calendar')

  var calendar = new Calendar(calendarEl, {
    plugins: [ timeGridPlugin ],
    defaultView: 'timeGridWeek',
    minTime: '08:00:00',
    maxTime: '21:00:00',
    firstDay: 1,
    events,
    defaultDate: events[0].start
  })

  calendar.render()
})

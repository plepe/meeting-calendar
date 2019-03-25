const Calendar = require('@fullcalendar/core').Calendar
const timeGridPlugin = require('@fullcalendar/timegrid').default

let events = require('../events.json')

document.addEventListener('DOMContentLoaded', function() {
  var calendarEl = document.getElementById('calendar')

  events = events.sort(ev => ev.start)
  let firstDate = events[0].start
  let lastDate = events[events.length - 1].end

  var calendar = new Calendar(calendarEl, {
    plugins: [ timeGridPlugin ],
    defaultView: 'timeGridCustom',
    minTime: '08:00:00',
    maxTime: '21:00:00',
    events,
    defaultDate: firstDate,
    views: {
      timeGridCustom: {
        type: 'timeGrid',
        visibleRange: {
          start: firstDate,
          end: lastDate
        },
        buttonText: 'Full duration'
      }
    }
  })

  calendar.render()
})

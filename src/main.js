const Calendar = require('@fullcalendar/core').Calendar
const timeGridPlugin = require('@fullcalendar/timegrid').default

document.addEventListener('DOMContentLoaded', function() {
  var calendarEl = document.getElementById('calendar')

  var calendar = new Calendar(calendarEl, {
    plugins: [ timeGridPlugin ],
    defaultView: 'timeGridWeek',
    hiddenDays: [ 2, 4 ],
    minTime: '08:00:00',
    maxTime: '21:00:00',
    firstDay: 1
  })

  calendar.render()
})

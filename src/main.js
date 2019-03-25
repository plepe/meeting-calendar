const Calendar = require('@fullcalendar/core').Calendar
const timeGridPlugin = require('@fullcalendar/timegrid').default

const httpGetJSON = require('./httpGetJSON')

document.addEventListener('DOMContentLoaded', function() {
  httpGetJSON('GET', 'events.json', null, (err, result) => {
    if (err) {
      alert(err)
    }

    console.log(result)
    startup(result)
  })
})

function startup (events) {
  var calendarEl = document.getElementById('calendar')

  events = events.sort(ev => ev.start)
  let firstDate = events[0].start
  let lastDate = events[events.length - 1].end

  var calendar = new Calendar(calendarEl, {
    locale: 'en-gb',
    header: false,
    plugins: [ timeGridPlugin ],
    defaultView: 'timeGridCustom',
    minTime: '08:00:00',
    maxTime: '21:00:00',
    events,
    defaultDate: firstDate,
    height: 'parent',
    allDaySlot: false,
    slotLabelFormat: { hour: 'numeric', minute: '2-digit', omitZeroMinute: false, meridiem: false },
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
}

const Calendar = require('@fullcalendar/core').Calendar
const timeGridPlugin = require('@fullcalendar/timegrid').default

const httpGetJSON = require('./httpGetJSON')

global.meetingCalendar = function (param) {
  httpGetJSON('GET', param.events, null, (err, result) => {
    if (err) {
      alert(err)
    }

    startup(param, result)
  })
}

function startup (param, events) {
  let calendarEl = param.dom
  if (typeof calendarEl === 'string') {
    calendarEl = document.getElementById(calendarEl)
  }

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

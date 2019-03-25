function httpGetJSON (method, url, data, callback) {
  let xhr

  function readystatechange () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        let json

        try {
          json = JSON.parse(xhr.responseText)
        } catch (err) {
          return callback(err)
        }

        callback(null, json)
      } else {
        callback(xhr.responseText)
      }
    }
  }

  xhr = new XMLHttpRequest()
  xhr.open(method, url, true)
  xhr.responseType = 'text'
  xhr.onreadystatechange = readystatechange
  xhr.send()
}

module.exports = httpGetJSON

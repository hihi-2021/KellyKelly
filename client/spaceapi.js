import request from 'superagent'

// *** EXAMPLE ***
export function getIss () {
  return request
    .get(`http://api.open-notify.org/iss-now.json`)
    .then(response => response.body)
}
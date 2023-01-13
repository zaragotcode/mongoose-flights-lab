import { Flight } from "../models/flight.js"

function index(req, res) {
  Flight.find({})
  .then(flights => {
    res.render('flights/index')
      title: 'All Flights'
      flights
  })
}

export {
  index
}
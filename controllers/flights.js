import { Flight } from "../models/flight.js"



function newFlight(req, res) {
  res.render("flight/new", {
    title: "Add Flight"
  })
}


function create(req, res) {
  Flight.create(req.body)
  .then(flight => {
    res.redirect(`/flight/${flight._id}`)
  })
  .catch(error => {
    console.log(error)
    res.redirect('/flights')
  })
}


function index(req, res) {
  Flight.find({})
  .then(flights => {
    res.render('flights/index')
      flights
  })
  .catch(error => {
    // handle errors
    console.log(error)
    res.redirect('/flights')
  })
}




export {
  index,
  newFlight as new,
  create
}
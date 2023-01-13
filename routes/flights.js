import { Router } from 'express'
import * as flightCtrl from "../controllers/flights.js"
const router = Router()

// Get localhost:3000/flights
router.get('/', flightCtrl.index)

// Get localhost:3000/flights/new
router.get('/new', flightCtrl.new)


export {
  router
}

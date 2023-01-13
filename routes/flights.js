import { Router } from 'express'
import * as flightCtrl from "../controllers/flights.js"
const router = Router()

/* GET users listing. */
router.get('/', flightCtrl.index)

export {
  router
}

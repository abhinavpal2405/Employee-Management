import express from 'express'
import {register} from '../controllers/registerController.js'
const registerRouter= express.Router()
registerRouter.post('/register',register)
export default registerRouter;


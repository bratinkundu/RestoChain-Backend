import express from 'express';
import * as userController from '../controllers/userController'

const router = express.Router();


router.post('/user', userController.createUser)
router.get('/data', userController.getUserData)

export default router;
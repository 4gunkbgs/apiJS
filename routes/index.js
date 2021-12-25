import express from "express"
import { getNotif, getNotifID, saveNotif, updateNotif, deleteNotif} from "../controller/notificationController.js"
const router = express.Router()

//get all
router.get('/', getNotif)

//create data
router.post('/', saveNotif)

//get by id
router.get('/:id', getNotifID)

//update id
router.patch('/:id', updateNotif)

//delete id
router.delete('/:id', deleteNotif)

export default router
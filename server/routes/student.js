import  express  from 'express';
import { getStudents, createStudent } from '../controllers/students';
const router = express.Router();
import student from '../models/students.js'

router.get('/' , getStudents)
router.post('/' , createStudent)
 

export default router;
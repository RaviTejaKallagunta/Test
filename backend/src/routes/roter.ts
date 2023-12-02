import express from 'express'
import { findJobs, newJob } from '../controller/jobController'

export const router=express.Router()

router.post('/admin',newJob)
router.get('/search',findJobs)
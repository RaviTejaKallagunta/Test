import express from 'express'
import connection from './database/dbConnection'
import { router } from './routes/roter'
import cors from 'cors'

const app=express()

app.use(cors())

app.use(express.json())

app.use('/',router)

const PORT=8888
app.listen(PORT,
    ()=>{
        console.log(`Server Started Running on PORT Number ${PORT}`)
        connection()
    })
import express from 'express'
import connection from './database/dbConnection'

const app=express()

const PORT=8888
app.listen(PORT,
    ()=>{
        console.log(`Server Started Running on PORT Number ${PORT}`)
        connection()
    })
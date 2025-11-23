
const express = require('express')
const studentsRouter = require('./routes/students')
const app=express()
app.use(express.json())
app.use('/students',studentsRouter)


app.listen(9997, () => {
    console.log(" its good");
})
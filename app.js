
const express = require('express')
const studentsRouter = require('./routes/students')
const usersRouter= require('./routes/users')
const app=express()
app.use(express.json())
app.use('/students',studentsRouter)
app.use('/user',usersRouter)

app.listen(3232, () => {
    console.log(" its good");
})
const express = require('express')
const mongoose=require('mongoose')
require('dotenv').config()
const PORT=process.env.PORT
const app = express()ען
app.use(express.json())

const {ToConnect}=require('./config/db');
ToConnect();
const authRouter=require('./routes/authRouter')
app.use('/auth',authRouter)

const productRouter=require('./routes/productRouter')
app.use('/product',productRouter)


mongoose.connection.once('open', () => {
console.log('Connected to MongoDB')
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
})

//מידלוור אחרון לאחר כולם
const errMiddleware=require('./middlewares/errorMiddleware')
app.use(errMiddleware)




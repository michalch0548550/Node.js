require('dotenv').config()
const {ToConnect}=require('./config/db')
ToConnect();
const express=require('express')
const app=express()
app.use(express.json())

app.get('/test', (req, res) => {
    res.send("The server is alive!");
});

const routerAuth=require('./routes/authRoutes')
app.use('/auth',routerAuth)

const authMiddleware=require('./middleware/authMiddleware')
app.use(authMiddleware)

const routerRecipes=require('./routes/RecipeRoutes')
app.use('/recipe',routerRecipes)

//חייב להיות לאחר כל ה-middleware
const errorMiddleware=require('./middleware/errorMiddleware')
app.use(errorMiddleware)
app.listen(3232, () => {
    console.log("my project good!!!");
})

//הערות
//בצעתי בדיקות והכל עובד!
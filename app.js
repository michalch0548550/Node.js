const express=require('express')
const app=express()
app.use(express.json())
const routerRecipes=require('./routes/RecipeRoutes')
app.use('/recipe',routerRecipes)


//חייב להיות לאחר כל ה-middleware
const errorMiddleware=require('./middleware/errorMiddleware')
app.use(errorMiddleware)
app.listen(3000, () => {
    console.log("my project good!!!");
})
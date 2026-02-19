const exprees=require('express')
const router=exprees.Router()
const{LogIn, SinIn}=require('../controllers/authController')
router.post('/login',LogIn)
router.post('/SinIn',SinIn)
module.exports=router
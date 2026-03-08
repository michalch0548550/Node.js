const exprees=require('express')
const router=exprees.Router()
const{LogIn, SignUp}=require('../controllers/authController')
router.post('/login',LogIn)
router.post('/SignUp',SignUp)
module.exports=router








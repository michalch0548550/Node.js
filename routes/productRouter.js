const express=require('express')
const router=express.Router()
const {UpdateDataOfProduct,DeleteProduct,
    CreateProduct,getProductById,
    DeleteCategoryById,getAllProduct}=require('../controllers/productController')
const auth=require('../middlewares/authMiddleware')
const isAdmin=require('../middlewares/isAdmin')
router.put('/UpdateDataOfProduct',auth,isAdmin,UpdateDataOfProduct)//עובד
router.put('/DeleteProduct',auth,isAdmin,DeleteProduct)//עובד
router.post('/CreateProduct',auth,isAdmin,CreateProduct)//עובד
router.get('/getProductById',auth,getProductById)//עובד
router.delete('/DeleteCategoryById',auth,isAdmin,DeleteCategoryById)//עובד
router.get('/getAllProduct',auth,getAllProduct)//עובד

module.exports=router











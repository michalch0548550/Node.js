const express=require('express')
const router=express.Router()
const{updateRecipe,delateRecipe,addRecipe}=require('../controllers/recipeController')
router.put('/',updateRecipe)
router.post('/',addRecipe)
router.delete('/',delateRecipe)
module.exports=router
const express=require('express')
const router=express.Router()
const{updateRecipe,deleteRecipe,addRecipe}=require('../controllers/recipeController')
router.put('/:id',updateRecipe)
router.post('/',addRecipe)
router.delete('/:id',deleteRecipe)
module.exports=router












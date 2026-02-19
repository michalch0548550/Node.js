const recipe=require('../models/Recipe.js')
async function getRecipes(){
    return await recipe.find()
}   
async function getRecipeById(id){
    return await recipe.findOne({ id: id });
}
async function updateDataOfRecipe(id,body){ 
    await recipe.findOneAndUpdate({ id: id }, body, { new: true })
}          
async function deleteRecipeById(id){
    await recipe.findOneAndDelete(id)
}           

async function createRecipe(body){
    return await recipe.create(body)
}

module.exports=
{getRecipes,getRecipeById,updateDataOfRecipe,deleteRecipeById,createRecipe}
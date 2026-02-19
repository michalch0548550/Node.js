const { getRecipes,getRecipeById,updateDataOfRecipe,deleteRecipeById,createRecipe} = require('../services/recipse.services.js')
//עדכון
 async function updateRecipe(req, res) {
    try {   
        const id = Number(req.params.id)
        const recipe = await getRecipeById(id)
        if (!recipe) {
            return res.status(404).send('Recipe not found')
        }
        const body = req.body
        await updateDataOfRecipe(id, body)
        res.send('Recipe  updated')
    } catch (err) {
        res.status(500).send(`Error: ${ err.message }`)
    }
}

//מחיקה
 async function deleteRecipe(req, res)
 {
    try {
        const id = req.params.id
        const recipe = await getRecipeById(id)      
        if (!recipe) {
            return res.status(404).send('Recipe not found')
        }
        await deleteRecipeById(id)
        res.status(200)
        res.send('Recipe deleted')
    } catch (err) {
        res.status(500).send(`Error: ${ err.message }`)
    }
}
//הוספה
 async function addRecipe(req, res) {
if(!req.body.name )
   return res.status(400).send("Error: name is required")
try{
const body = req.body
await createRecipe(body)
res.send(await getRecipes())    
}
catch(err){
    res.status(500).send(`Error: ${ err.message }`)
}
}
module.exports = { updateRecipe, deleteRecipe, addRecipe }

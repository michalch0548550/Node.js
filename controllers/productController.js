const {updateDataOfProduct,deleteCategoryById,createProduct
    ,GetProductById,GetAllProduct,deleteProduct}=require('../services/product.services')
    const Category=require('../models/Category')
//עדכון
async function UpdateDataOfProduct(req, res) {
    try {   
        const id = req.body.id
        const product = await GetProductById(id)
        if (!product) {
            return res.status(404).send('product not found')
        }
        const body = req.body
        await updateDataOfProduct(id, body)
        res.send('product updated')
    } catch (err) {
        res.send(`Error: ${ err.message }`)
    }
}
//מחיקה
async function DeleteProduct(req, res)
 {
    try {
        const id = req.body.id
        const product = await GetProductById(id)      
        if (!product) {
            return res.status(404).send('product not found')
        }
        await deleteProduct(id)
        res.status(200)
        res.send('product update')
    } catch (err) {
        res.send(`Error: ${ err.message }`)
    }
}
//יצירה
async function CreateProduct(req, res) {
if(!req.body.stock||!req.body.price||!req.body.title )
   return res.status(400).send("Error:  input required field")
try{
const body = req.body
const newProduct=await createProduct(body) 
res.status(201).json(newProduct)
}
catch(err){
    res.send(`Error: ${ err.message }`)
}
}
//חיפוש מוצר לפי id
async function getProductById(req, res) {
     try {   
        const id = req.body.id
        const product = await GetProductById(id)
        if (!product) {
            return res.status(404).send('product not found')
        }
        res.json(product);
    } catch (err) {
        res.send(`Error: ${ err.message }`)
    }
}
//מחיקת קטגוריה
async function DeleteCategoryById(req, res) {
    try {
        const id = req.body.id
        const category = await Category.findById(id); // נניח שהמודל שלך נקרא Category
        if (!category) {
            return res.status(404).send('Category not found');
        }
        await deleteCategoryById(id)
        res.status(200).send('if dont have products -category deleted');
    } catch (err) {
        res.status(500).send(`Error: ${err.message}`);
    }
}
//שליפת המוצרים הקימים
async function getAllProduct(req, res) {
    try {
        const products = await GetAllProduct();
        res.status(200).json(products);
    } catch (err) {
        res.send(`Error: ${err.message}`);
    }
}

module.exports={UpdateDataOfProduct,DeleteProduct,
    CreateProduct,getProductById,DeleteCategoryById,getAllProduct}

    





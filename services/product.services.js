const product=require('../models/Product')
const category=require('../models/Category');
 const fs = require('fs');

//update
async function updateDataOfProduct(id,body){ 
     await product.findOneAndUpdate({ _id: id }, body, { new: true })
}

// //deleteProductTotal
// async function deleteProductByIdTotal(id){
//     await product.findOneAndDelete(id)
// }

//deleteProduct
async function deleteProduct(id){
    await product.findOneAndUpdate({ _id: id }, { $set: { isActive: false } })
    fs.appendFile('details.txt', 'product delete\n'
        , (err) => {
            if (err) 
             console.log("err the event no writed")
        });
}

//deleteCategory
async function deleteCategoryById(id) {
   const productsCount = await product.countDocuments({ category: id })
   if(productsCount === 0){
      await category.findOneAndDelete({_id:id});
   }
}
//create
async function createProduct(body){
  return await product.create(body)
}
//Get Product By Id
async function GetProductById(id) {
    return await product.findOne({_id:id})
}
//get all product
async function GetAllProduct() {
    return await product.find({isActive:true})
}

module.exports={updateDataOfProduct,deleteCategoryById,createProduct
    ,GetProductById,GetAllProduct,deleteProduct}



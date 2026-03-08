const {model,Schema}=require('mongoose')

const categorySchema = new Schema({
  name: {
    type:String,
    unique: true,
    trim: true,
    required: true
  },
},
{
  collection : 'Category'
}
);
const category=model('Category',categorySchema)
module.exports=category

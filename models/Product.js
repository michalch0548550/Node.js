const {model,Schema}=require('mongoose')

const productSchema = new Schema(
  {
    title: {
      type:String,
      trim: true,
     required: true
    },
    price: {
      type:Number,
      required: true,
      min: 0
    },
    stock: {
      type:Number,
      required: true,
      min: 0
    },
    category: {
      type: Schema.Types.ObjectId,
      ref: 'Category',
      required: true
    },
    isActive: {
      type: Boolean,
      default: true
    }
  },
  {
    timestamps: true ,
    collection : 'Product'

  }
);
const product=model('Product',productSchema)
module.exports=product
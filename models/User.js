const {model,Schema}=require('mongoose')

const userSchema = new Schema({
  username: {
    type:String,
    unique: true,
    trim: true,
    required: true
  },
  password: {
    type:String,
    trim:true,
    required: true,
    minlength: 6
  },
  role: {
    type:String,
    enum: ['admin', 'viewer'],
    default: 'viewer'
  }
}

);

const user=model('User',userSchema)
module.exports=user

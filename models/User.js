const {model, Schema} = require('mongoose');

const userSchema = new Schema({
id:{
    type: Number,
    required: true,
    unique: true,
},
name:{
    type: String,
    minlength: 2,
    required: true
}

})

const User = model('users', userSchema);
module.exports = User;
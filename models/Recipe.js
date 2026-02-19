
const { model, Schema } = require('mongoose');

const recipeSchema = new Schema({
    id:{
        type: Number,
        required: true,
        unique: true,
    },
    name: {
    type: String,
    minlength: 2,
    required: true
    },
    ingredients: {
    type: [String]
    },
    category:{
    enum: ['חלבי', 'בשרי', 'פרווה']
    }
    ,isFavorite:{
    type: Boolean,
    default: false
    }
})

const Recipe = model('recipes', recipeSchema);

module.exports = Recipe;
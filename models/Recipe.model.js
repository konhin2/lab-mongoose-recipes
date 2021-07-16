// 1. IMPORTACIONES
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// 2. SCHEMA
const recipeSchema = new Schema({
  title: {
    type: String,
    require: true,
    unique: true
  },
  level: {
    type: String,
    enum: ['Easy Peasy','Amateur Chef','UltraPro Chef']
  },
  ingredients: [String],
  cuisine: {
    type: String,
    require: true
  },
  dishType: {
    type: String,
    enum: ['breakfast', 'main_course', 'soup', 'snack', 'drink', 'dessert', 'other']
  },
  image: {
    type: String,
    default: 'https://images.media-allrecipes.com/images/75131.jpg'
  },
  duration: {
    type: Number,
    min: 0
  },
  creator: String,
  created: {
    type: Date,
    default: Date.now
  }
})

// 3. MODELO
const Recipe = mongoose.model('Recipe', recipeSchema);

// 4. EXPORTACIÓN
module.exports = Recipe;

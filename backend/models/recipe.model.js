const { model, Schema } = require('mongoose');

const recipeSchema = Schema({
  recipeName: {
    type: String,
    required: true,
  },
  recipeImage: {
    type: String,
  },
  category: {
    type: String,
    required: true,
    enum: ['carnes', 'legumbres', 'pescados', 'postres', 'verduras'],
  },
  ratingTotal: {
    type: Number,
  },
  ratingVotes: {
    type: Number,
  },
  difficulty: {
    type: String,
    required: true,
    enum: ['facil', 'media', 'dificil'],
  },
  ingredients: [{
    quantity: {
      type: String,
    },
    description: {
      type: String,
    },
  }],
  preparation: [{
    order: {
      type: Number,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
    },
    instructions: [{
      instructionIcon: {
        type: String,
        required: true,
      },
      instructionName: {
        type: String,
        required: true,
      },
      intructionDuration: {
        type: String,
        required: true,
      },
    }],
  }],
});

module.exports = model('Recipe', recipeSchema);

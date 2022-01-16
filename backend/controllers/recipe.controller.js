const Recipe = require('../models/recipe.model');

async function getAllRecipes(req, res, next) {
  try {
    const recipes = await Recipe.find(req.query);
    res.json(recipes);
  } catch (error) {
    res.status(500);
    next(error);
  }
}
async function getRecipebyID(req, res, next) {
  // eslint-disable-next-line no-underscore-dangle
  const id = req.user._id;
  if (!id) {
    next(new Error('Invalid id'));
  }
  try {
    const recipe = await Recipe.findById(req.params.id);
    res.json(recipe);
  } catch (error) {
    next(error);
  }
}

module.exports = { getAllRecipes, getRecipebyID };

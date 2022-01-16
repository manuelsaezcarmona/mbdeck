const router = require('express').Router();
const authentication = require('../helpers/authentication');
const { getAllRecipes, getRecipebyID } = require('../controllers/recipe.controller');

router.get('/', getAllRecipes);
router.get('/:id', authentication, getRecipebyID);

module.exports = router;

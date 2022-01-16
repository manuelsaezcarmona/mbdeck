/* eslint-disable no-underscore-dangle */
const bcrypt = require('bcryptjs');
const User = require('../models/user.model');

async function getAllUsers(req, res, next) {
  try {
    const user = await User.find(req)
      .populate('recipes', {
        recipeName: 1,
        recipeImage: 1,
        category: 1,
        ratingTotal: 1,
        ratingVotes: 1,
      });
    res.json(user);
  } catch (err) {
    next(err);
  }
}

async function getUserById(req, res, next) {
  const id = req.user._id;

  if (!id) {
    next(new Error('Invalid id'));
  }
  try {
    const user = await User.findById(id).populate('recipes', {
      recipeName: 1,
      recipeImage: 1,
      category: 1,
      ratingTotal: 1,
      ratingVotes: 1,
    });
    res.json(user);
  } catch (error) {
    next(error);
  }
}

async function addUser(req, res, next) {
  const user = req.body;
  user.recipes = [];

  if (!user.username || !user.pass) {
    next(new Error());
  }
  const salt = bcrypt.genSaltSync(3);
  user.pass = bcrypt.hashSync(user.pass, salt);
  try {
    const newUser = await User.create(user);
    res.json(newUser);
  } catch (error) {
    next(error);
  }
}

async function deleteUser(req, res, next) {
  const id = req.user._id;
  try {
    const userdeleted = await User.findByIdAndDelete(id);
    if (userdeleted) {
      res.status(202).json({ deletedId: id });
    } else {
      res.status(404).json({ message: 'Not found' });
    }
  } catch (error) {
    next(error);
  }
}

async function updateUser(req, res, next) {
  const id = req.user._id;
  if (!id) {
    next(new Error('Invalid id'));
  }

  /* cuando actualize tiene qque volver a encriptar el password
      por ahora no permitire modificar la password desde el front
  const salt = bcrypt.genSaltSync(3);
  req.body.user.pass = bcrypt.hashSync(req.body.user.pass, salt);

  */

  try {
    const updatedUser = await User.findByIdAndUpdate(id, req.body, { new: true });
    res.json(updatedUser);
  } catch (error) {
    next(error);
  }
}

async function addRecipeToUser(req, res, next) {
  const id = req.user._id;

  const { recipeid } = req.params;

  try {
    const user = await User.findById(id);
    user.recipes = [...user.recipes, recipeid];

    await user.save();

    res.json(user);
  } catch (error) {
    next(error);
  }
}
async function deleteRecipeToUser(req, res, next) {
  const id = req.user._id;
  const { recipeid } = req.params;

  try {
    const user = await User.findById(id);
    const recipesFiltered = user.recipes
      .map((recipe) => recipe.toString())
      .filter((item) => item !== recipeid);
    user.recipes = recipesFiltered;

    user.save();

    res.json(user);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getAllUsers, getUserById, addUser, deleteUser, updateUser, addRecipeToUser, deleteRecipeToUser,
};

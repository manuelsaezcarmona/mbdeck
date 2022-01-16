const router = require('express').Router();
const authentication = require('../helpers/authentication');

const {
  getAllUsers, getUserById, addUser, deleteUser, updateUser, addRecipeToUser, deleteRecipeToUser,
} = require('../controllers/user.controller');

router.get('/', getAllUsers);
router.get('/id', authentication, getUserById);
router.patch('/addrecipe/:recipeid', authentication, addRecipeToUser);
router.patch('/delrecipe/:recipeid', authentication, deleteRecipeToUser);
router.post('/add', addUser);
router.delete('/delete', authentication, deleteUser);
router.patch('/update', authentication, updateUser);

module.exports = router;

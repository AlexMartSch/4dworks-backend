const express = require('express');
const usersController = require('../../controllers/v1/users-controller');
const router = express.Router();


router.post('/create', usersController.createUser)
router.put('/update', usersController.updateUser)
router.delete('/delete', usersController.deleteUser)
router.get('/get-all', usersController.getUsers)
router.get('/get/:userId', usersController.getUser)

module.exports = router
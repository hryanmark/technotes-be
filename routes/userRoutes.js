const express = require("express");
const router = express.Router();
const userControll = require('../controller/usersController');

router.route("/")
.get(userControll.getAllusers)
.post(userControll.createNewUser)
.patch(userControll.updateUser)
.delete(userControll.deleteUser);


module.exports = router;
const express = require("express");
const router = express.Router()
const usersControllers = require("../controller/users")


//get all users
router.get("/users", usersControllers.list)

//get user by ID
router.get("/users/:id", usersControllers.show )

//create user
router.post("/", usersControllers.create)

//update user
router.put('/users/:id', usersControllers.update)
//delete user
router.delete('/users/:id', usersControllers.deleteUser)

module.exports = router
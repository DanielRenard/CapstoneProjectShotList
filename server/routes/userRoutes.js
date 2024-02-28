let express = require("express");
let router = express.Router();
let Controllers = require("../controllers"); // index.js

// Adds a GET route to return all users
//http://localhost:8085/api/users/  Adds a GET route to return all users
router.get("/", (req, res) => {
  Controllers.userController.getUsers(res);
});

// Adds a POST route to create a new user
//http://localhost:8085/api/users/signup  Adds a POST route to return new user
router.post("/signup", (req, res) => {
  Controllers.userController.createUser(req.body, res);
});

// http: //localhost:8085/api/users/<id> Adds a PUT route to update a user
router.put("/:id", (req, res) => {
  Controllers.userController.updateUser(req, res);
});

// http: //localhost:8085/api/users/<id> Adds a DELETE route to update a user
router.delete("/:id", (req, res) => {
  Controllers.userController.deleteUser(req, res);
});

// Adds a POST route to create a new user
//http://localhost:8085/api/users/login  Adds a POST route to return user
router.post("/login", (req, res) => {
  Controllers.userController.loginUser(req, res);
});

module.exports = router;
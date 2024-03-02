let express = require("express");
let router = express.Router();
let Controllers = require("../controllers"); // index.js

// Adds a GET route to return all shots
//http://localhost:8085/api/shots/  Adds a GET route to return all shots
router.get("/", (req, res) => {
  Controllers.shotController.getShots(res);
});

// Adds a POST route to create a new shot
//http://localhost:8085/api/shots/newshot  Adds a POST route to return new shot
router.post("/newshot", (req, res) => {
  console.log(req.body);
  Controllers.shotController.createShot(req.body, res);
});

// http: //localhost:8085/api/shots/<id> Adds a PUT route to update a shot
router.put("/:id", (req, res) => {
  Controllers.shotController.updateShot(req, res);
});

// http: //localhost:8085/api/shots/<id> Adds a DELETE route to delete a shot
router.delete("/:id", (req, res) => {
  Controllers.shotController.deleteShot(req, res);
});

module.exports = router;

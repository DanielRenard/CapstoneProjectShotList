"use strict";
let Models = require("../models"); // matches index.js

const getShots = (res) => {
  Models.Shot.find({})
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      res.status(500).send({ result: 500, error: err.message });
    });
};

const createShot = (data, res) => {
  // creates a new user using JSON data POSTed in req.body
  console.log(data);
  new Models.Shot(data)
    .save()
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.status(500).send({ result: 500, error: err.message });
      // res.send({ result: 500, error: err.message });
    });
};

const updateShot = (req, res) => {
  // updates the shot matching the ID from the param using JSON data POSTed in request body
  console.log("update shot", req.body);
  Models.Shot.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  })
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.status(500).send({ result: 500, error: err.message });
    });
};

const deleteShot = (req, res) => {
  // deletes the shot matching the ID from the param
  Models.Shot.findByIdAndDelete(req.params.id)
    .then((data) => res.status(200).send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.status(500).send({ result: 500, error: err.message });
    });
};

module.exports = {
  getShots,
  createShot,
  updateShot,
  deleteShot,
};

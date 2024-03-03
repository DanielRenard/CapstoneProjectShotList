"use strict";
let Models = require("../models"); // matches index.js

const getUsers = (res) => {
  // finds all users
  Models.User.find({})
    .then((data) => res.send({ result: 200, data: data })) // change data: data to data: data.data; will break app; need to change all data.data to data
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

const getUser = (req, res) => {
  // finds all users
  Models.User.find({_id: req.params.id})
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

const createUser = (data, res) => {
  // creates a new user using JSON data POSTed in req.body
  console.log(data);
  new Models.User(data)
    .save()
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      //   res.status(500).send({result: 500, error: err.message})
      res.send({ result: 500, error: err.message });
    });
};

const updateUser = (req, res) => {
  // updates the user matching the ID from the param using JSON data POSTed in request body
  console.log('update user', req.body);
  Models.User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  })
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.status(500).send({ result: 500, error: err.message });
    });
};

const deleteUser = (req, res) => {
  // deletes the user matching the ID from the param
  Models.User.findByIdAndDelete(req.params.id)
    .then((data) => res.status(200).send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.status(500).send({ result: 500, error: err.message });
    });
};

const loginUser = (req, res) => {
  console.log("login email", req.body);
  Models.User.find({ email: req.body.email })
    .then((data) => {
      console.log(data);
      if (data.length > 0) {
        // if data.length is not zero a user is found
        const dbPassword = data[0].password;
        const reqPassword = req.body.password;
        if (dbPassword === reqPassword) {
          console.log("password correct");
          res.send({ result: 200, data: data });
        } else {
          res.status(400).send({ result: 400, data: "wrong password" })
        }
      } else {
        res.status(404).send({ result: 404, data: "user not found"})
      }      
    })
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

// ++ Test updating and deleting a user using Postman

module.exports = {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
  loginUser,
};

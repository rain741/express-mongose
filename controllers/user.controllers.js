const db = require("../config/db");
const User = require("../models/User");

module.exports = {
  getAllUser: async (req, res) => {
    try {
      const users = await User.find({}, "-password -__v");

      res.json(users);
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: error.message || "internal server error",
      });
    }
  },

  getUserById: async (req, res) => {
    try {
      const { id } = req.params;
      const users = await User.findById(id, "-password -__v");

      res.json(users);
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: error.message || "internal server error",
      });
    }
  },

  addUser: async (req, res) => {
    try {
      let user = req.body;
      const newUser = await User.create(user);

      res.json("user has been created");
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: error.message || "internal server error",
      });
    }
  },

  deleteUser: async (req, res) => {
    try {
      const { id } = req.params;
      await User.findByIdAndDelete(id);

      res.json("User has been Deleted");
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: error.message || "Internal Server Error",
      });
    }
  },

  editUser: async (req, res) => {
    try {
      const { id } = req.params;
      const update = {
        fullname: req.body.fullname,
        username: req.username,
        email: req.body.email,
        password: req.body.password,
      };
      await User.findOneAndUpdate(id, update);
      res.json("user has been Edit");
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: err.message || "Internal Server Error",
      });
    }
    ``;
  },
};

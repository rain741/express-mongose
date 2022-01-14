const db = require("../config/db");
const Course = require("../models/course");

module.exports = {
  //get all course data
  getAllCourse: async (req, res) => {
    try {
      const course = await Course.find({}, "-password -__v");

      res.json(course);
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: error.message || "internal server error",
      });
    }
  },

  //get course data by ID
  getCourseById: async (req, res) => {
    try {
      const { id } = req.params;
      const course = await Course.findById(id, "-password -__v");

      res.json(course);
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: error.message || "internal server error",
      });
    }
  },

  //adding new course data
  addCourse: async (req, res) => {
    try {
      let course = req.body;
      const newCourse = await Course.create(course);

      res.json("Course has been created");
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: error.message || "internal server error",
      });
    }
  },

  //deleted one Course data by ID
  deleteCourse: async (req, res) => {
    try {
      const { id } = req.params;
      await Course.findByIdAndDelete(id);

      res.json("Course has been Deleted");
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: error.message || "Internal Server Error",
      });
    }
  },

  //edit Course By-ID
  editCourse: async (req, res) => {
    try {
      const { id } = req.params;
      const update = {
        name: req.body.name,
        price: req.price,
        module: req.body.module,
      };
      await Course.findOneAndUpdate(id, update);
      res.json("Course has been Edit");
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: err.message || "Internal Server Error",
      });
    }
  },

};

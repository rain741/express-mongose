const express = require("express");
const {
  getAllCourse,
  addCourse,
  getCourseById,
  deleteCourse,
  editCourse,
} = require("../controllers/course.controllers");

const router = express.Router();

router.get("/", getAllCourse);
router.get("/:id", getCourseById);
router.post("/", addCourse);
router.delete("/:id", deleteCourse);
router.put("/:id", editCourse);

module.exports = router;

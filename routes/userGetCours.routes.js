const express = require("express");
const router = express.Router();

const {
  getAllUserGetCourse,
  postUserGetCourse,
  getUserGetCourseByID,
  deleteUserGetCourse,
  editUserGetCourse,
} = require("../controllers/userGetCourse.controllers");

router.get("/", getAllUserGetCourse);
router.post("/", postUserGetCourse);
router.get("/:id", getUserGetCourseByID);
router.delete("/:id", deleteUserGetCourse);
router.put("/:id", editUserGetCourse);

module.exports = router;

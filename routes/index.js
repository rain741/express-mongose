const express = require("express");
const router = express.Router();

//from user.routes
const userRouter = require("./user.routes");
// from course.routes
const courseRouter = require("./course.routes");
//from userGetCourse.routes
const userGetCourse = require("./userGetcours.routes");
const validateToken = require("../middleWare/validate");
const authRoutes = require("./auth.routes");

router.get("/", (req, res) => {
  res.json("dari express");
});
router.get("/auth", authRoutes);

router.use(validateToken);

router.use("/user", userRouter);
router.use("/course", courseRouter);
router.use("/userGetCourse", userGetCourse);
module.exports = router;

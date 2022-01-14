const express = require("express");
const {
  getAllUser,
  getUserById,
  addUser,
  deleteUser,
  editUser,
} = require("../controllers/user.controllers");

const router = express.Router();

router.get("/", getAllUser);
router.get("/:id", getUserById);
router.post("/", addUser);
router.delete("/:id", deleteUser);
router.put("/:id", editUser);

module.exports = router;

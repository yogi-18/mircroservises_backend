const router = require("express").Router();
const {
  createUser,
  updateUser,
  deleteUser,
} = require("../controller/userController");
const { Login, getUser } = require("../controller/authController");
const { isUser } = require("../middleware/authProtected");

router.post("/adminlogin", Login);
router.get("/login", isUser, getUser);

router
  .post("/user", createUser)
  .get("/user", getUser)
  .put("/userupdate/:userId", updateUser)
  .delete("userdelete/:userId", deleteUser);

module.exports = router;

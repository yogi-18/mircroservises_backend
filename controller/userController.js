const asyncHandler = require("express-async-handler");
const user = require("../model/signUpUser");

exports.createUser = asyncHandler(async (req, res) => {
  console.log(req.body);
  const result = await user.create(req.body);
  res.json({
    message: "User Added Succesfully",
    result,
  });
});
exports.getUser = asyncHandler(async (req, res) => {
  const result = await user.find();
  res.json({
    msg: "User Fetch Success",
    result,
  });
  res.json({
    message: "user fetch successfully",
  });
});
exports.updateUser = asyncHandler(async (req, res) => {
  const { userId } = req.params;
  const result = await user.findByIdAndUpdate(userId, req.body, { new: true });
  res.json({ message: "user Updated successfully", result });
});

// delete user
exports.deleteUser = asyncHandler(async (req, res) => {
  const { userId } = req.params;
  const result = await user.findByIdAndDelete(userId);
  res.json({ message: "user Delete  successfully", result });
});

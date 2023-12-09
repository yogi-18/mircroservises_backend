const asyncHandler = require("express-async-handler");
const adminModel = require("../model/adminModel");
const jwt = require("jsonwebtoken");

exports.Login = asyncHandler(async (req, res) => {
  const { username, password } = req.body;
  console.log(req.body);
  const result = await adminModel.findOne({ username });

  if (!result) {
    return res.status(401).json({ msg: "username do not match" });
  }
  // console.log(result);
  const match = await adminModel.findOne({ password });
  if (!match) {
    return res.status(401).json({ msg: "password do not match" });
  }
  const token = jwt.sign({ result }, process.env.JWT_KEY);

  res.json({
    msg: "Login Success",
    result: {
      _id: result._id,
      name: result.name,
      username: result.username,
      token,
    },
  });
});

exports.getUser = asyncHandler(async (req, res) => {
  const headers = req.headers.authorization;
  jwt.verify(headers, process.env.JWT_KEY, function (err, decoded) {
    // err
    // decoded undefined
    res.status(200).json(decoded);
    console.log(decoded);
  });
});

const { Router } = require("express");
const { addUser } = require("./userControllers");
const { hashPass } = require("../middleware/auth");


const userRouter = Router();

userRouter.post("/user", hashPass, addUser);

module.exports = userRouter;
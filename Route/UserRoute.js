import express from "express"
import { registration , signin } from "../Controllers/UsersController.js";

const userRouters = express.Router();

userRouters.route("/regi").post(registration)
userRouters.route("/signin").post(signin)

export { userRouters}


//test commit
//test 2 commit
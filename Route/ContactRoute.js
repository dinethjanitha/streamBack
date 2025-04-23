import express  from "express"
import { createMessage, getAllMessages } from "../Controllers/ContactUsController.js";

const contactRouter = express.Router();

contactRouter.route("/contact").post(createMessage).get(getAllMessages)

export default contactRouter
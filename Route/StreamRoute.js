import express from "express"
import { addStreams , getAllStreams , getStreamById } from "../Controllers/StreamsController.js";


const streamRoute = express.Router();

streamRoute.route("/stream").post(addStreams).get(getAllStreams)
streamRoute.route("/stream/:id").get(getStreamById)

export { streamRoute }
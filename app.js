import { fileURLToPath } from "url";
import { dirname } from "path";
import experss from "express";
import morgan from "morgan";
import { userRouters } from "./Route/UserRoute.js";
import cors from "cors";
import { streamRoute } from "./Route/StreamRoute.js";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = experss();
app.use(morgan("dev"));
app.use(experss.json());

const corsOptions = {
  origin: ["http://localhost:3000", "https://mystreamsite.vercel.app" ],
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
};

app.use("/images", experss.static(path.join(__dirname, "public/images")));

app.use(cors(corsOptions));

app.use("/api/v1", userRouters);
app.use("/api/v1", streamRoute);

export default app;
import experss from "express"
import morgan from "morgan";
import { userRouters } from "./Route/UserRoute.js";
import cors from "cors"

const app = experss();
app.use(morgan('dev'))
app.use(experss.json())

const corsOptions = {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
  };
  

app.use(cors(corsOptions));

app.use("/api/v1" , userRouters)

export default app
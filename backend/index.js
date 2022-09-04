import express from "express";
import { PORT } from "./config.js";
import cors from "cors";
import indexRoutes from "./routes/index.routes.js";
import cohanRoutes from "./routes/cohan.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use(cohanRoutes);
app.use(indexRoutes);

app.listen(PORT);
console.log(`Server run ${PORT}`);

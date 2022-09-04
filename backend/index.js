import express from "express";
import { PORT } from "./config.js";
import indexRoutes from "./routes/index.routes.js";
import cohanRoutes from "./routes/cohan.routes.js";

const app = express();
app.use(cohanRoutes);
app.use(indexRoutes);

app.listen(PORT);
console.log(`Server run ${PORT}`);

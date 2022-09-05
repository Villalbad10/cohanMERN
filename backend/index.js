import express from "express";
import { PORT } from "./config.js";
import cors from "cors";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import indexRoutes from "./routes/index.routes.js";
import cohanRoutes from "./routes/cohan.routes.js";

const app = express();
const _dirname = dirname(fileURLToPath(import.meta.url));

app.use(cors());
app.use(express.json());

app.use(cohanRoutes);
app.use(indexRoutes);

app.use(express.static(join(_dirname, '../client/dist')));

app.listen(PORT);
console.log(`Server run ${PORT}`);

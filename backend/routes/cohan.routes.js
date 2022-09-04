import { Router } from "express";
import {
  createCohan,
  deleteCohan,
  getCohan,
  updateCohan,
} from "../controllers/cohan.controllers.js";

const router = Router();

router.get("/people", getCohan);
router.post("/people", createCohan);
router.put("/people/:id", updateCohan);
router.delete("/people/:id", deleteCohan);

export default router;

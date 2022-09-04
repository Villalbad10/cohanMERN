import { Router } from "express";
import {
  createCohan,
  deleteCohan,
  getCohan,
  updateCohan,
} from "../controllers/cohan.controllers.js";

const router = Router();

router.get("/cohan", getCohan);
router.post("/cohan", createCohan);
router.put("/cohan/:id", updateCohan);
router.delete("/cohan/:id", deleteCohan);

export default router;

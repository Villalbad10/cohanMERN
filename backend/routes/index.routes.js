import { Router } from "express";
import { poll } from "../db.js";

const router = Router();

router.get("/ping", async (req, res) => {
  const [rows] = await poll.query("SELECT 1+1 as result");
  console.log(rows);
  res.json(rows);
});

export default router;

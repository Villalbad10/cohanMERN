import { Router } from "express";

const router = Router();

router.get("/cohan");
router.post("/cohan");
router.put("/cohan/:id");
router.delete("/cohan/:id");

export default router;

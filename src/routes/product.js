import express from "express";
import { create } from "../controllers/product";

const router = express.Router();


router.post("/products", create);
router.post("/products", create);
router.delete("/products/:id", remove);
router.get("/products/:id", get);
router.patch("/products/:id", update);

export default router;
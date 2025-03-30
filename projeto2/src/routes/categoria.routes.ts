import { Router } from "express";
import categoriaController from "../controllers/categoria.controller";

const router = Router();

router.post("/", (req, res) => categoriaController.create(req, res));
router.get("/", (req, res) => categoriaController.getAll(req, res));

export default router;

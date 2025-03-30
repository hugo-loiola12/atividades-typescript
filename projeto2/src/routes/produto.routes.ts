import { Router } from "express";
import produtoController from "../controllers/produto.controller";

const router = Router();

router.post("/", (req, res) => produtoController.create(req, res));
router.get("/", (req, res) => produtoController.getAll(req, res));

export default router;

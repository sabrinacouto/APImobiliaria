import express from "express";
import PropertyController from "../controllers/property.controller.js";

const router = express.Router();

//A rota vai registrar um novo imóvel
router.post("/register", PropertyController.register);

//A rota irá listar todos os imóveis registrados
router.get("/", PropertyController.getAllProperties);

//A rota vai listar um imóvel com base no seu id
router.get("/:id", PropertyController.getById);

//A rota vai deletar o imóvel com base no seu id
router.delete("/:id", PropertyController.deleteById);

// A rota vai atualizar o imóvel com base no seu id
router.put("/:id", PropertyController.updateById);

export default router;

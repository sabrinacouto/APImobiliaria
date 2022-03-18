import express from "express";
import PropertyController from "../controllers/property.controller";

export default router;

router.post("/property/register", PropertyController.register);

//A rota irá listar todos os imóveis registrados
router.get("/property", PropertyController.getAllProperties);

//A rota vai listar um imóvel com base no seu id
router.get("/property/:id", PropertyController.getById);

//A rota vai deletar o imóvel com base no seu id
router.delete("/property/:id", PropertyController.deleteById);

// A rota vai atualizar o imóvel com base no seu id
router.put("/property/:id", PropertyController.updateById);

import express from "express";

import Company from "../controllers/company/company";
// consts
const router = express.Router();

// rota de criação
router.post("/companies", Company.create);

// rota de listagem
router.get("/companies", Company.list);

// compare route
router.get("/companies/compare/:id1/:id2", Company.compare);

// update route
router.post("/companies/update", Company.update);




export default router;

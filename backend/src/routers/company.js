import express from "express";

import Company from "../controllers/company/company";
// consts
const router = express.Router();

// rota de criação
router.post("/companies", Company.create);

// rota de criação
router.get("/companies", Company.list);

// rota de criação
router.post("/companies/update", Company.update);


export default router;

import express from "express";

import Company from "../controllers/company/company";
// consts
const router = express.Router();

// rota de criação
router.post("/companies", Company.create);

// index companies
router.get("/companies", Company.list);
// show company
router.get("/companies/:id", Company.show);

// compare route
router.get("/companies/compare/:id1/:id2", Company.compare);

// update route
router.patch("/companies/:id", Company.update);

// update route
router.delete("/companies/:id", Company.delete);




export default router;

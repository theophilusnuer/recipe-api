import { Router } from "express";
import { Recipes } from "../modules/recipes.js";

const router = Router();

router.post("/recipes", async (req,res)=>{
const results = await Recipes.create();
res.json(results);
});

router.get("/recipes", async (req, res) => {
  const results = await Recipes.find();
  res.json(results);
  });

  router.get("/recipes/:id", async (req, res) => {
    const results = await Recipes.findOne();
    res.json(results);
  });
  
  router.patch("/recipes/:id", async (req, res) => {
    const results = await Recipes.updateOne();
    res.json(results);
  });
  
  router.delete("/recipes/:id", async (req, res) => {
    const results = await Recipes.deleteOne();
    res.json(results);
  });

export default router;
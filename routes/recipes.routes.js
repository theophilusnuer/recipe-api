import { Router } from "express";

const router = Router();

router.post("/recipes", (req,res)=>{
res.send("Add recipes");
});

router.get("/recipes", (req, res) => {
    res.send("Get recipes!");
  });

  router.get("/recipes/:id", (req, res) => {
    res.send("Get a single recipe!");
  });
  
  router.patch("/recipes/:id", (req, res) => {
      res.send("Update a single recipe!");
  });
  
  router.delete("/recipes/:id", (req, res) => {
    res.send("Delete a single recipe!");
  });

export default router;
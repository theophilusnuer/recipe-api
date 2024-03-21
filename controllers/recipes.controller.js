import { RecipeModel } from "../models/recipe.js";

export const addRecipe = async (req, res) => {
  const results = await RecipeModel.create(req.body);
  res.json(results);
};

export const getRecipes = async (req, res) => {
  const results = await RecipeModel.find(req.body);
  res.json(results);
};

export const getRecipe = async (req, res) => {
  const results = await RecipeModel.findOne(req.body);
  res.json(results);
};

export const updateRecipe = async (req, res) => {
  const results = await RecipeModel.updateOne(req.body);
  res.json(results);
};

export const deleteRecipe = async (req, res) => {
  const results = await RecipeModel.deleteOne(req.body);
  res.json(results);
};

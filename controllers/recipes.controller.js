import { RecipeModel } from "../models/recipe.js";

export const addRecipe = async (req, res) => {
  const results = await RecipeModel.create();
  res.json(results);
};

export const getRecipes = async (req, res) => {
  const results = await RecipeModel.find();
  res.json(results);
};

export const getRecipe = async (req, res) => {
  const results = await RecipeModel.findOne();
  res.json(results);
};

export const updateRecipe = async (req, res) => {
  const results = await RecipeModel.updateOne();
  res.json(results);
};

export const deleteRecipe = async (req, res) => {
  const results = await RecipeModel.deleteOne();
  res.json(results);
};

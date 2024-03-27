import { RecipeModel } from "../models/recipe.js";

export const addRecipe = async (req, res, next) => {
try {
  //add recipe to database
    const results = await RecipeModel.create({
      ...req.body,
      image: req.file.filename
    });
   // return response
    res.status(201).json(results);
} catch (error) {
  next(error);
}
};

export const getRecipes = async (req, res, next) => {
  try {
    //get all recipes from database
    const results = await RecipeModel.find();
    //return results
    res.status(200).json(results);
  } catch (error) {
    next(error);
  }
};

export const getRecipe = async (req, res, next) => {
 try {
  //get a single recipe by id
   const results = await RecipeModel.findById(req.params.id);
   //return 404 if no recipe was found
   if (results === null) {
    return res.status(404).json({
      message: `Recipe with ID: ${req.params.id} not found!`
    });
   }
   //return results
   res.status(200).json(results);
 } catch (error) {
  next(error);
 }
};

export const updateRecipe = async (req, res, next) => {
 try {
  //update a single recipe
   const results = await RecipeModel.updateOne(req.params.id);
   //return results
   res.status(202).json(results);
 } catch (error) {
  next(error);
 }
};

export const deleteRecipe = async (req, res, next) => {
 try {
  //delete a single recipe
   const results = await RecipeModel.deleteOne(req.body);
   //return results
   res.status(200).json(results);
 } catch (error) {
  next(error);
 }
};

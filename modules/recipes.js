import { Schema,model } from "mongoose";

const recipescchema = new Schema({
title: {type: String, required: true},
});

export const Recipes = model('Recipes', recipescchema, 'recipe');
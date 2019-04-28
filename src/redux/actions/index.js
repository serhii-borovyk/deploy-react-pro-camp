import { ADD_INGREDIENTS, REMOVE_INGREDIENTS } from "../types";


export const addIngredient = type => ({
  type: ADD_INGREDIENTS,
  payload: type
})
export const removeIngredient = type => ({
  type: REMOVE_INGREDIENTS,
  payload: type
})



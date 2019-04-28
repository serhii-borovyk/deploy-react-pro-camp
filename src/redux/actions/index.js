import { ADD_INGREDIENTS } from "../types";


export const addIngredient = type => ({
  type: ADD_INGREDIENTS,
  payload: type
})



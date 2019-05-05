import { ADD_INGREDIENTS, HIDE_MODAL, REMOVE_INGREDIENTS, SHOW_MODAL } from "../types";


export const addIngredient = type => ({
  type: ADD_INGREDIENTS,
  payload: type
})
export const removeIngredient = type => ({
  type: REMOVE_INGREDIENTS,
  payload: type
})
export const showModal = () => ({
  type: SHOW_MODAL,
})
export const hideModal = () => ({
  type: HIDE_MODAL,
})



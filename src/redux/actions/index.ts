import {
  ActionTypes,
  ADD_INGREDIENTS,
  AddIngredientAction,
  HIDE_MODAL, HideModalAction,
  REMOVE_INGREDIENTS, RemoveIngredientAction,
  SHOW_MODAL, ShowModalAction
} from "../types";

export const addIngredient = (type: string): AddIngredientAction => ({
  type: ADD_INGREDIENTS,
  payload: type
});
export const removeIngredient = (type: string): RemoveIngredientAction => ({
  type: REMOVE_INGREDIENTS,
  payload: type
})
export const showModal = (): ShowModalAction => ({
  type: SHOW_MODAL,
})
export const hideModal = (): HideModalAction  => ({
  type: HIDE_MODAL,
})



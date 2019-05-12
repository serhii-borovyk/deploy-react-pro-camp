export const ADD_INGREDIENTS = 'ADD_INGREDIENTS';
export const REMOVE_INGREDIENTS = 'REMOVE_INGREDIENTS';
export const SHOW_MODAL = 'SHOW_MODAL';
export const HIDE_MODAL = 'HIDE_MODAL';

export interface AddIngredientAction {
  type: typeof ADD_INGREDIENTS;
  payload: string;
}

export interface RemoveIngredientAction {
  type: typeof REMOVE_INGREDIENTS;
  payload: string;
}

export interface ShowModalAction {
  type: typeof SHOW_MODAL;
}

export interface HideModalAction {
  type: typeof HIDE_MODAL;
}

export type ActionTypes = AddIngredientAction | RemoveIngredientAction | ShowModalAction | HideModalAction;
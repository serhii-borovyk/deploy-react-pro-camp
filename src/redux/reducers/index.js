import * as types from "../types";

const initialState = {
  ingredients: {
    salad: {
      count: 0,
      price: 0.5
    },
    bacon: {
      count: 0,
      price: 0.7
    },
    cheese: {
      count: 0,
      price: 0.4
    },
    meat: {
      count: 0,
      price: 1.3
    }
  },
  totalPrice: 0
}

export default (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_INGREDIENTS:
      const ingredientType = action.payload;
      const ingredient = state.ingredients[ingredientType];
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [ingredientType]: ingredient.count + 1
        },
        totalPrice: state.totalPrice + ingredient.price
      }
    default:
      return state;
  }
}
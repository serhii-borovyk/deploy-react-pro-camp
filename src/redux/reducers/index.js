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
  totalPrice: 4,
  showModal: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_INGREDIENTS: {
      const ingredientType = action.payload;
      const ingredient = state.ingredients[ingredientType];
      // debugger
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [ingredientType]: {
            ...ingredient,
            count: ingredient.count + 1
          }
        },
        totalPrice: state.totalPrice + ingredient.price
      }
    }
    case types.REMOVE_INGREDIENTS: {
      const ingredientType = action.payload;
      const ingredient = state.ingredients[ingredientType];
      const newCount = ingredient.count - 1;
      if (newCount < 0) {
        return state
      }
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [ingredientType]: {
            ...ingredient,
            count: newCount
          }
        },
        totalPrice: state.totalPrice - ingredient.price
      };
    }
    case types.SHOW_MODAL: {
      return {...state, showModal: true};
    }
    case types.HIDE_MODAL: {
      return {...state, showModal: false};
    }
    default:
      return state;
  }
}
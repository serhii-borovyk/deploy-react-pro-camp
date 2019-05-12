import { ActionsAll } from "../types";
import { IconButton } from "@material-ui/core";
import { strict } from "assert";


export interface IIngredient {
  count: number;
  price: number;
}

interface IBurgerInitialState {
  readonly ingredients: Map<string, IIngredient>
  readonly totalPrice: number;
  readonly showModal: boolean;
}

class BurgerState implements IBurgerInitialState {
  ingredients = new Map<string, IIngredient>();
  totalPrice: 4;
  showModal: false;

  constructor() {
    this.ingredients.set('salad', { count: 0, price: 0.5 });
    this.ingredients.set('bacon', { count: 0, price: 0.7 });
    this.ingredients.set('cheese', { count: 0, price: 0.4 });
    this.ingredients.set('meat', { count: 0, price: 1.3 });
  }
}

const initialState: IBurgerInitialState = {
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

export default (state = initialState, action: ActionsAll) => {
  switch (action) {
    case ActionsAll.ADD_INGREDIENTS: {
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
      return { ...state, showModal: true };
    }
    case types.HIDE_MODAL: {
      return { ...state, showModal: false };
    }
    default:
      return state;
  }
}

import * as React from 'react';
import { Component } from 'react';
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";
import styled from "styled-components"
import { IIngredient } from "../../redux/reducers";

const BurgerBody = styled.div`
  width: 100%;
  margin: auto;
  height: 250px;
  text-align: center;
  font-weight: bold;
  font-size: 1.2rem;
  overflow-y: auto;

  @media (min-width: 500px) and (min-height: 400px) {
    width: 350px;
    height: 300px;
  }

  @media (min-width: 500px) and (min-height: 401px) {
    width: 450px;
    height: 400px;
  }

  @media (min-width: 1000px) and (min-height: 700px) {
    width: 700px;
    height: 600px;
  }
`

type IBurger = {
  ingredients:  Map<string, IIngredient>
};

class Burger extends Component<IBurger> {

  render() {
    let { ingredients } = this.props;
    let transformedIngredients: any = Object.keys(ingredients)
      .map(key =>
        [...Array(ingredients[key].count)]
          .map((_, i) =>
            <BurgerIngredient key={key + i} type={key}/>))
      .reduce((acc, arr) => acc.concat(arr), [])
    if (transformedIngredients.length === 0) {
      transformedIngredients = <p>Please start adding ingredients</p>
    }

    return (
      <BurgerBody>
        <BurgerIngredient type="bread-top"/>
        {transformedIngredients}
        <BurgerIngredient type="bread-bottom"/>
      </BurgerBody>
    );
  }
}

export default Burger;
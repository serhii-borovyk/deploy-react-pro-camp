import * as React from 'react';
import PropTypes from 'prop-types'
import { Bacon, BreadBottom, BreadTop, Cheese, Meat, Salad, Seeds1, Seeds2 } from "./StyledIngredients";

const BurgerIngredient = (props) => {
  switch (props.type) {
    case ('bread-bottom'):
      return <BreadBottom/>
    case ('meat'):
      return <Meat/>
    case ('cheese'):
      return <Cheese/>
    case ('salad'):
      return <Salad/>
    case ('bacon'):
      return <Bacon/>
    case ('bread-top'):
      return <BreadTop><Seeds1/><Seeds2/></BreadTop>
    default:
      return null;
  }
};

BurgerIngredient.propTypes = {
  type: PropTypes.string.isRequired
};

export default BurgerIngredient;
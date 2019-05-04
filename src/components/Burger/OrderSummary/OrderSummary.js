import React, { Fragment } from 'react';
import styled from "styled-components";

const Capitalize = styled.span` text-transform: capitalize `


const OrderSummary = ({ingredients}) => {
  const summary = Object.keys(ingredients)
    .map(key =>
      <li key={key}>
        <Capitalize>{key}</Capitalize>:
        {ingredients[key].count}
      </li>
    )
  return (
    <Fragment>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients</p>
      <ul>
        {summary}
      </ul>
      <p>Continue to checkout?</p>
    </Fragment>
  );
};

export default OrderSummary;
import * as React, { Fragment } from 'react';
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import { hideModal } from "../../../redux/actions";

const Capitalize = styled.span` text-transform: capitalize `


const OrderSummary = ({ ingredients, hideModal }) => {
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
      <Button onClick={()=>alert('You continue!')} variant="contained" color="primary">Accept</Button>
      <Button onClick={hideModal} variant="contained" color="secondary">Decline</Button>
    </Fragment>
  );
};

export default connect(null, { hideModal })(OrderSummary);
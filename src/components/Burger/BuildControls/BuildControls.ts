import * as React, { Fragment } from 'react';
import BuildControl from "./BuildControl";
import styled from "styled-components";
import { connect } from "react-redux";
import { showModal } from "../../../redux/actions";

const OrderButton = styled.button`
  background-color: #DAD735;
  outline: none;
  cursor: pointer;
  border: 1px solid #966909;
  color: #966909;
  font-family: inherit;
  font-size: 1.2em;
  padding: 15px 30px;
  box-shadow: 2px 2px 2px #966909;
  
    :hover, :active {
      background-color: #A0DB41;
      border: 1px solid #966909;
      color: #966909;
    }
  
    :disabled {
      background-color: #C7C6C6;
      cursor: not-allowed;
      border: 1px solid #ccc;
      color: #888888;
    }
  
    :not(:disabled) {
      animation: enable 0.3s linear;
    }
  
    @keyframes enable {
      0% {
          transform: scale(1);
      }
      60% {
          transform: scale(1.1);
      }
      100% {
          transform: scale(1);
      }
    }
`


const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' },
]

function anyFalse(disabledInfo) {
  return Object.values(disabledInfo)
    .every(value => value === true);
}

const BuildControls = ({ disabledInfo, price, showModal }) => (
  <Fragment>
    <p>Current Price: {price.toFixed(2)}</p>
    {controls.map(ctrl =>
      <BuildControl
        key={ctrl.label}
        type={ctrl.type}
        disabled={disabledInfo[ctrl.type]}
      />)}
    <OrderButton
      onClick={showModal}
      disabled={anyFalse(disabledInfo)}>
      ORDER NOW
    </OrderButton>
  </Fragment>
);


export default connect(null, { showModal })(BuildControls);
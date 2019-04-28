import React, { Fragment } from 'react';
import BuildControl from "./BuildControl";

const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' },
]

const BuildControls = ({ disabledInfo, price }) => (
  <Fragment>
    <p>Current Price: {price.toFixed(2)}</p>
    {controls.map(ctrl =>
      <BuildControl
        key={ctrl.label}
        type={ctrl.type}
        disabled={disabledInfo[ctrl.type]}
      />)}
  </Fragment>
);

export default BuildControls;
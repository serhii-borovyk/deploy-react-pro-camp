import React from 'react';
import BuildControl from "./BuildControl";

const controls = [
  {label: 'Salad', type: 'salad'},
  {label: 'Bacon', type: 'bacon'},
  {label: 'Cheese', type: 'cheese'},
  {label: 'Meat', type: 'meat'},
]

const BuildControls = () => (
  <div>
    {controls.map(ctrl =>
      <BuildControl key={ctrl.label} label={ctrl.label}/>)}
  </div>
);

export default BuildControls;
import React, { Fragment } from 'react';
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import { connect } from 'react-redux';

const BurgerBuilder = ({ingredients}) => (
  <Fragment>
    <Burger ingredients={ingredients}/>
    <BuildControls/>
  </Fragment>
);

const mapStateToProps = state => ({
  ingredients: state.ingredients,
})

export default connect(mapStateToProps)(BurgerBuilder);
import React, { Component, Fragment } from 'react';
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import { connect } from 'react-redux';
import * as PropTypes from "prop-types";

class BurgerBuilder extends Component {
  getDisabledInfo = () => {
    const { ingredients } = this.props;
    const disabledInfo = { ...ingredients }
    for (const key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key].count <= 0
    }
    return disabledInfo;
  };

  render() {
    let { ingredients, totalPrice} = this.props;
    return (
      <Fragment>
        <Burger ingredients={ingredients}/>
        <BuildControls
          price={totalPrice}
          disabledInfo={this.getDisabledInfo()}
        />
      </Fragment>
    );
  }
}

BurgerBuilder.propTypes = { ingredients: PropTypes.any }

const mapStateToProps = state => ({
  ingredients: state.ingredients,
  totalPrice: state.totalPrice,
})

export default connect(mapStateToProps)(BurgerBuilder);
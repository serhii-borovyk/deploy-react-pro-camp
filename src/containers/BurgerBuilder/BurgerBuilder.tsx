import * as React from 'react';
import { Component, Fragment } from 'react';
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import { connect } from 'react-redux';
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import { IIngredient } from "../../redux/reducers";

interface IBurgerBuilder {
  ingredients: Map<string, IIngredient>,
  totalPrice: number;
}

class BurgerBuilder extends Component<IBurgerBuilder> {
  getDisabledInfo = () => {
    const { ingredients } = this.props;
    const disabledInfo = { ...ingredients }
    for (const key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key].count <= 0
    }
    return disabledInfo;
  };

  render() {
    let { ingredients, totalPrice } = this.props;
    return (
      <Fragment>
        <Modal>
          <OrderSummary ingredients={ingredients}/>
        </Modal>
        <Burger ingredients={ingredients}/>
        <BuildControls
          price={totalPrice}
          disabledInfo={this.getDisabledInfo()}
        />
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  ingredients: state.ingredients,
  totalPrice: state.totalPrice,
})

export default connect(mapStateToProps)(BurgerBuilder);
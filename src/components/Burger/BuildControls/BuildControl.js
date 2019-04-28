import React from 'react';
import styled from "styled-components";
import { addIngredient, removeIngredient } from "../../../redux/actions";
import { connect } from "react-redux";

const Body = styled.div`  
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 5px 0;
`
const Button = styled.button`  
  display: block;
  font: inherit;
  padding: 5px;
  margin: 0 5px;
  width: 80px;
  border: 1px solid #AA6817;
  cursor: pointer;
  outline: none;
  
  :disabled {
    background-color: #AC9980;
    border: 1px solid #7E7365;
    color: #ccc;
    cursor: default;
  }
  
  :hover:disabled {
    background-color: #AC9980;
    color: #ccc;
    cursor: not-allowed;
  }
`
const Label = styled.div`
  padding: 10px;
  font-weight: bold;
  width: 80px;
`
const Less = styled.div`
  background-color: #D39952;
  color: white;
  
  :hover, :active {
    background-color: #DAA972;
  }
`
const More = styled.div`
  background-color: #8F5E1E;
  color: white;
  
  :hover, :active {
    background-color: #99703F;
  }
`

const BuildControl = ({ type, addIngredient, removeIngredient, disabled  }) => (
  <Body>
    <Label>{type}</Label>
    <Button disabled={disabled} onClick={() => removeIngredient(type)}><Less>Less</Less></Button>
    <Button onClick={() => addIngredient(type)}><More>More</More></Button>
  </Body>
);


export default connect(null, { addIngredient, removeIngredient })(BuildControl);
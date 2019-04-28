import React from 'react';
import styled from 'styled-components'

const Body = styled.div`

`
const Label = styled.div`

`
const Button = styled.button`

`

const BuildControl = ({ label }) => (
  <Body>
    <Label>{label}</Label>
    <Button>Less</Button>
    <Button>More</Button>
  </Body>
);

export default BuildControl;
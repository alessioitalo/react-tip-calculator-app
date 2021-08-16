import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: hsl(183, 100%, 15%);
  color: white;
  &:hover, &:focus {
    background-color: hsl(172, 67%, 45%);
    color: hsl(183, 100%, 15%);
  }
`;

function Button({ value, percentageHandler }) {
  const defaultPercentageHandler = () => {
    percentageHandler(value);
  };

  return (
    <StyledButton onClick={defaultPercentageHandler}>{value}%</StyledButton>
  );
}

export default Button;

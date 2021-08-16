import React from "react";
import Button from "./Button";
import styled from "styled-components";

const StyledTip = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1rem 0;
  & div {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-gap: 1rem;
    @media (min-width: 800px) {
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-rows: 1fr 1fr;
    }
  }

  & input:focus,
  & input:hover{
    outline: none;
    border: none;
    box-shadow: 0 0 0 1px hsl(172, 67%, 45%);
  }

  & input::-webkit-outer-spin-button,
  & input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  & input[type="number"] {
    -moz-appearance: textfield;
  }
  & div input::placeholder {
    font-family: "Space Mono", monospace;
    font-size: 14px;
    text-align: center;
    color: hsla(183, 100%, 15%, 0.5);
    font-weight: bold;
    padding: 0;
    margin:0;
  }
`;

function TipSelector({ percentageHandler }) {
  const customPercentageHandler = (e) => {
    percentageHandler(e.target.value);
  };

  return (
    <StyledTip>
      <label>Select Tip %</label>
      <div>
        <Button value={5} percentageHandler={percentageHandler} />
        <Button value={10} percentageHandler={percentageHandler} />
        <Button value={15} percentageHandler={percentageHandler} />
        <Button value={25} percentageHandler={percentageHandler} />
        <Button value={50} percentageHandler={percentageHandler} />
        <input
          placeholder="Custom"
          onChange={customPercentageHandler}
          type="number"
        ></input>
      </div>
    </StyledTip>
  );
}

export default TipSelector;

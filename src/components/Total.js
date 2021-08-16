import React from "react";
import styled from "styled-components";

const StyledTotal = styled.div`
  background-color: hsl(183, 100%, 15%);
  border-radius: 10px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  @media (min-width: 800px) {
    justify-content: space-between;
  }

  & .half-container-total {
    padding: 1rem 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  & .total-description {
    text-align: left;
    font-size: 0.9rem;
    font-weight: bold;
    color: white;
  }

  & .total-total {
    text-align: right;
    font-size: 2.5rem;
    font-weight: bold;
    color: hsl(172, 67%, 45%);
  }

  & .person {
    color: hsl(184, 14%, 56%);
  }

  & button {
    margin-top: 1rem;
    padding: 0.5rem 0;
    grid-row-start: 3;
    grid-column-start: span 2;
    background-color: hsl(172, 67%, 45%);
    color: hsl(183, 100%, 15%);
    font-size: 1.3rem;
  }

  & button:hover {
    background-color: hsla(172, 67%, 45%, 0.3);
  }
`;

function Total({ resetHandler, bill, people, percentage }) {
  return (
    <StyledTotal>
      <div>
        <div className="half-container-total ">
          <div className="total-description">
            <div>Tip Amount</div>
            <div className="person">/ person</div>
          </div>
          <div className="total-total">
            $
            {bill && people && percentage
              ? (bill * (percentage/100) / people).toFixed(2)
              : "0.00"}
          </div>
        </div>

        <div className="half-container-total ">
          <div className="total-description">
            <div>Total</div>
            <div className="person">/ person</div>
          </div>
          <div className="total-total">
            $
            {bill && people && percentage
              ? ((bill / people) + (bill * (percentage/100) / people)).toFixed(2)
              : "0.00"}
          </div>
        </div>
      </div>
      <button onClick={resetHandler}>RESET</button>
    </StyledTotal>
  );
}

export default Total;

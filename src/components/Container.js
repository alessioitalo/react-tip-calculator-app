import React from "react";
import styled from "styled-components";


const StyledContainer = styled.div`
  background-color: white;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  @media (min-width: 800px) {
    width: 70%;
    flex-direction: row;
    gap: 3rem;
    align-items: stretch;
  }
`;

function Container(props) {
  return <StyledContainer>{props.children}</StyledContainer>;
}

export default Container;
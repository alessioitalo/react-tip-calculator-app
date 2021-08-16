import React, { useState } from "react";
import styled from "styled-components";

const StyledInput = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1rem 0;
  & input {
    border: ${(props) => (props.inputInvalid ? "1px solid red" : "none")};
    background-color: hsl(189, 41%, 97%);
    background-image: url(${(props) => props.icon});
    background-repeat: no-repeat;
    background-position: 5%;
    outline: none;
  }

  & input:hover,
  & input:focus {
    outline: none;
    box-shadow: ${(props) =>
      props.inputInvalid ? "none" : "0 0 0 1px hsl(172, 67%, 45%)"};
  }
`;

const StyledError = styled.p`
  font-size: 0.8rem;
  color: red;
`;

const Input = React.forwardRef((props, ref) => {
  const [inputInvalid, setInputInvalid] = useState(false);

  const inputChangeHandler = (e) => {
    if (props.billHandler) {
      props.billHandler(e.target.value);
      return;
    }
    props.peopleHandler(e.target.value);
  };

  const inputBlurHandler = (e) => {
    const regEx = /^\d+(\.\d{1,2})?$/;
    if (!regEx.test(e.target.value)) {
      setInputInvalid(true);
    } else {
      setInputInvalid(false);
    }
  };

  return (
    <StyledInput inputInvalid={inputInvalid} icon={props.icon}>
      <label>{props.label}</label>
      <input onChange={inputChangeHandler} onBlur={inputBlurHandler} />
      {inputInvalid && <StyledError>Please enter a valid value</StyledError>}
    </StyledInput>
  );
});

export default Input;

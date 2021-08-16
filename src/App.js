import Container from "./components/Container";
import TipSelector from "./components/TipSelector";
import Input from "./components/Input";
import Total from "./components/Total";
import logo from "./images/logo.svg";
import dollarIcon from "./images/icon-dollar.svg";
import peopleIcon from "./images/icon-person.svg";
import React, { useState } from "react";

function App() {
  const [bill, setBill] = useState(0);
  const [percentage, setPercentage] = useState(0);
  const [people, setPeople] = useState(0);

  const regEx = /^\d+(\.\d{1,2})?$/;

  const billHandler = (value) => {
    if (!regEx.test(value)) {
      return;
    }
    setBill(value);
  };

  const percentageHandler = (value) => {
    setPercentage(value);
  };

  const peopleHandler = (value) => {
    if (!regEx.test(value)) {
      return;
    }
    setPeople(value);
  };

  const resetHandler = () => {
    setBill(0);
    setPercentage(0);
    setPeople(0);
    const inputs = document.querySelectorAll("input");
    inputs.forEach((input) => {
      input.value = "";
    });
  };

  return (
    <div className="App">
      <img src={logo} alt="logo" />
      <Container>
        <div>
          <Input label={"Bill"} billHandler={billHandler} icon={dollarIcon} />
          <TipSelector percentageHandler={percentageHandler} />
          <Input
            label={"Number of People"}
            peopleHandler={peopleHandler}
            icon={peopleIcon}
          />
        </div>
        <Total
          resetHandler={resetHandler}
          bill={bill}
          percentage={percentage}
          people={people}
        />
      </Container>
      <div className="attribution">
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io/challenges"
          target="_blank"
          rel="noreferrer"
        >
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a
          href="https://github.com/alessioitalo"
          target="_blank"
          rel="noreferrer"
        >
          alessioitalo
        </a>
        .
      </div>
    </div>
  );
}

export default App;

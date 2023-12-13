import React from "react";
import Parent from "./Parent";
import MyButton from "./MyButton";
import { MessageContext } from "./ExampleContext";

const Child = () => {
  return (
    <div>
      <MyButton></MyButton>
    </div>
  );
};

export default Child;

import React, { createContext, useState } from "react";
import ExampleContext from "./ExampleContext";

const Parent = () => {
  const [value, setvalue] = useState("Initial Value");
  return (
    <div>
      <ExampleContext.Provider vaule={value}></ExampleContext.Provider>
    </div>
  );
};

export default Parent;

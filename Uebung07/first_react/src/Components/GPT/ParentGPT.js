import React, { useState } from "react";
import ChildGPT from "./ChildGPT";
import InputFieldGPT from "./InputFieldGPT";
import MyContextGPT from "./MyContextGPT";

// Erstelle einen Kontext

const ParentGPT = () => {
  const [text, setText] = useState("");

  return (
    <MyContextGPT.Provider value={{ text, setText }}>
      <ChildGPT id={1} />
      <ChildGPT id={2} />
      <InputFieldGPT />
    </MyContextGPT.Provider>
  );
};

export default ParentGPT;

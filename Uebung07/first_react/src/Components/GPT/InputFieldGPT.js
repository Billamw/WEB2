import React, { useContext } from "react";
import MyContextGPT from "./MyContextGPT";

const InputFieldGPT = () => {
  const { text, setText } = useContext(MyContextGPT);

  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <input type="text" value={text} onChange={handleInputChange} />
      <p>Aktueller Text: {text}</p>
    </div>
  );
};

export default InputFieldGPT;

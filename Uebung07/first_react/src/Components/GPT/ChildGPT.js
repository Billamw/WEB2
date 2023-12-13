import React, { useContext } from "react";
import MyContextGPT from "./MyContextGPT";
import MyButtonGPT from "./MyButtonGPT";

const ChildGPT = ({ id }) => {
  const { text, setText } = useContext(MyContextGPT);

  const handleChange = () => {
    // Ändere den Text im Kontext basierend auf der ID des Child-Elements
    setText(`Child ${id} hat den Text geändert`);
  };

  return (
    <div>
      <MyButtonGPT
        buttonText={`Change Text in Child ${id}`}
        onClick={handleChange}
      />
      <p>
        Text im Child {id}: {text}
      </p>
    </div>
  );
};

export default ChildGPT;

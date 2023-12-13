import React, { useContext } from "react";
import "./Button.css";
import MyContextGPT from "./MyContextGPT";

const MyButtonGPT = ({ buttonText, onClick }) => {
  const { setText } = useContext(MyContextGPT);

  const handleClick = () => {
    // Hier kannst du die Logik für den Textänderungsprozess einfügen
    // Zum Beispiel:
    setText(buttonText);
    if (onClick) {
      onClick();
    }
  };

  return (
    <button className="my-button" onClick={handleClick}>
      {buttonText}
    </button>
  );
};

export default MyButtonGPT;

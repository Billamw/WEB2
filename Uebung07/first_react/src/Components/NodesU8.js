import React, { useState, createContext, useContext } from "react";

// Erstellen des Contexts
const MyContext = createContext();

// Parent-Komponente
const Parent = () => {
  const [contextValue, setContextValue] = useState("");

  return (
    <MyContext.Provider value={{ contextValue, setContextValue }}>
      <div>
        <InputField />
        <Child />
        <Child />
      </div>
    </MyContext.Provider>
  );
};

// Child-Komponente
const Child = () => {
  const { contextValue, setContextValue } = useContext(MyContext);

  const changeContext = (newValue) => {
    setContextValue(newValue);
  };

  return (
    <div>
      <p>Child Component {Math.floor(Math.random() * 100)}</p>
      <button
        onClick={() =>
          changeContext(
            `New value from Child ${Math.floor(Math.random() * 100)}`
          )
        }
      >
        Change Context
      </button>
      <p>Context Value: {contextValue}</p>
    </div>
  );
};

// InputField-Komponente
const InputField = () => {
  const { contextValue, setContextValue } = useContext(MyContext);

  const handleInputChange = (event) => {
    setContextValue(event.target.value);
  };

  return (
    <div>
      <input type="text" value={contextValue} onChange={handleInputChange} />
      <p>Context Value: {contextValue}</p>
    </div>
  );
};

export default Parent;

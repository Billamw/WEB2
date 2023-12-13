import React from "react";
import "./App.css";
import HelloWorls from "./Components/HelloWorls.js";
import MyButton from "./Components/MyButton.js";
import Counter from "./Components/Counter.js";
import Cat_Api from "./Components/Cat_Api.js";
import Parent from "./Components/NodesU8.js";

const App = () => {
  return (
    <div>
      {/* <HelloWorls />
      <MyButton />
      <Counter></Counter>
      <Cat_Api></Cat_Api> */}
      <Parent></Parent>
    </div>
  );
};

export default App;

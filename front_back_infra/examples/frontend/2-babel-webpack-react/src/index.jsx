import React from "react";
import { createRoot } from "react-dom/client";
import { test } from "./helper";
import { Header } from "./components/Header";

const a = 1;

function App() {
  const handleButtonClick = () => {
    console.log(test(a));
  };

  return (
    <div>
      <Header />

      <button onClick={handleButtonClick}>click</button>
      <button onDoubleClick={handleButtonClick}>double click</button>
    </div>
  );
}

// нужен только в точке входа
const root = createRoot(document.getElementById("root"));

root.render(<App />);

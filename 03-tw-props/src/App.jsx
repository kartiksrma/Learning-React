import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./comp/Card";

function App() {
  const [count, setCount] = useState(0);
  const myOj = {
    person: "Kartik",
    age: 21,
  };

  return (
    <>
      <Card username="Aryan" text="click me" />
      <Card username="Kartik" text="visit me" />
    </>
  );
}

export default App;

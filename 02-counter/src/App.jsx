import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(1);

  const addValue = () => {
    if (counter == 20) {
      alert("value is alrady 20");
    } else {
      counter += 1;
      setCounter(counter);
    }
  };
  const subValue = () => {
    if (counter == 0) {
      alert("value is alrady 0");
    } else {
      counter -= 1;
      setCounter(counter);
    }
  };

  return (
    <>
      <h1> small project </h1>
      <h2> count : {counter}</h2>
      <button onClick={addValue}> add </button>
      <button onClick={subValue}> sub </button>
    </>
  );
}

export default App;

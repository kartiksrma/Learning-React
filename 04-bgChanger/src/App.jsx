import { useState } from "react";
function App() {
  const [color, setColor] = useState("olive");

  return (
    <div
      style={{ width: "100vw", height:"100vh", backgroundColor: color}}
    >
      hello
    </div>
  );
}

export default App;

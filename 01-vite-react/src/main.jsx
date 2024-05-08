import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

const reactElem = React.createElement(
  "a",
  { href: "https://www.google.com", target: "_blank" },
  "click me"
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <reactElem>
    App()
  </>
);

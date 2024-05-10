import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

// eslint-disable-next-line no-unused-vars
const reactElem = React.createElement(
  "a",
  { href: "https://www.google.com", target: "_blank" },
  "click me"
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <App/>
  </>
);

function customRender(reactElement, container) {
  const domElem = document.createElement(reactElement.type);
  domElem.innerHTML = reactElement.children;
  /*
  domElem.setAttribute("href", reactElement.props.href);
  domElem.setAttribute("target", reactElement.props.target);

  container.appendChild(domElem);
  */
  for (const prop in reactElement.props) {
    if (prop === "children") continue;
    domElem.setAttribute(prop, reactElement.props.prop);
    console.log(reactElement.props);
  }
  container.appendChild(domElem);
}

const mainContainer = document.querySelector("#root");

const reactElement = {
  type: "a",
  props: {
    href: "https://www.google.com",
    target: "_blank",
  },
  children: "click me",
};

customRender(reactElement, mainContainer);

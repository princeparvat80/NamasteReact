import React from "react";
import ReactDOM from "react-dom";
//--------------------------------------------------------------------------------------------------------------
//     This is how we create element by JavaScript
//     const heading = document.createElement("h1");
//     heading.innerHTML = "Prince Parvat";
//     const root = document.getElementById("root");
//     root.appendChild(heading);
//--------------------------------------------------------------------------------------------------------------

// This is how we create element by JavaScript
const heading = React.createElement("h1", {}, "Namaste Prince Parvat"); //This object in this line will use to give the id to the elemnet.
const heading2 = React.createElement("h2", {}, "Namaste Prince Parvat 2");
const container = React.createElement("div", { id: "container" }, [
  heading,
  heading2,
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);

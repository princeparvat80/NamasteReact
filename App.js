// // --------------------------------------------------------------------------------------------------------------
// //     This is how we create element by JavaScript
// //     const heading = document.createElement("h1");
// //     heading.innerHTML = "Prince Parvat";
// //     const root = document.getElementById("root");
// //     root.appendChild(heading);
// // --------------------------------------------------------------------------------------------------------------

// // This is how we create element by React
// // const heading = React.createElement("h1", {}, "Learn"); //This object in this line will use to give the id to the elemnet.
// // const heading2 = React.createElement("h2", {}, "Learn 2");
// // const container = React.createElement("div", { id: "container" }, [
// //   heading,
// //   heading2,
// // ]);
// // --------------------------------------------------------------------------------------------------------------

import React from "react";
import ReactDOM from "react-dom/client";

// This is how we create element by JSX
const heading = (
  <h1 id="h1" key="key1">
    Learing JSX
  </h1>
);
// const rootElement = ReactDOM.createRoot(document.getElementById("root"));
// rootElement.render(heading);

// Functional Component
const Title = () => (
    <h2 id="h1" key="key1">
      Learing JSX Title
    </h2>
  );

const HeaderComponent = () => {
  return (
    <div>
      {heading}
      <Title /> 
      <h3>Functional component</h3>
    </div>
  );
};

const fucntionalComponentRoot = ReactDOM.createRoot(
  document.getElementById("root")
);
fucntionalComponentRoot.render(<HeaderComponent />);

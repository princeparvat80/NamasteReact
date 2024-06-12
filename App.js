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
// // This is how we create element by JSX
// // const heading = (
// //   <h1 id="h1" key="key1">
// //     Learing JSX
// //   </h1>
// // );
// // const rootElement = ReactDOM.createRoot(document.getElementById("root"));
// // rootElement.render(heading);
import React from "react";
import ReactDOM from "react-dom/client";

// Functional Component
const Title = () => (
  <h2 id="h1" key="key1" className="logo">
    Prince Restraunt
  </h2>
);

const Header = () => {
  return (
    <div className="header">
      <Title />
      <div>
        <ul className="nav">
          <li className="nav-button">Home</li>
          <li className="nav-button">About</li>
          <li className="nav-button">Contact</li>
          <li className="nav-button">Cart</li>
        </ul>
      </div>
    </div>
  );
};

const Body = () => {
  return <h3>Body</h3>;
};

const Footer = () => {
  return <h3>Footer</h3>;
};

const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);

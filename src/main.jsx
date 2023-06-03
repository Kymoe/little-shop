import React from "react";
import ReactDOM from "react-dom/client";
import Raddit from "./components/Raddit";
import "./App.css";
const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(<App />);
function App() {
  return (
    <>
      <Raddit />
    </>
  );
}

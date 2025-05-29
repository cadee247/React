import React from "react";
import ReactDOM from "react-dom/client"; // ✅ Use "react-dom/client"
import App from "./App"; // ✅ Import the main App component

// ✅ Create the React root and render the App component
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
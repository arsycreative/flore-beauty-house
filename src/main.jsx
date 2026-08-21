import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import ProfileCard from "./App.jsx";
import LinkInBioUI from "./App.jsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <LinkInBioUI />
    </BrowserRouter>
  </StrictMode>
);

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
// import { RouterProvider } from "react-router-dom";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
// import { ThemeProvider } from "@material-tailwind/react";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <ThemeProvider> */}
    <BrowserRouter>
      {/* <RouterProvider> */}
      <App />
      {/* </RouterProvider> */}
    </BrowserRouter>

    {/* </ThemeProvider> */}
  </StrictMode>
);

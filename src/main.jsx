import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
// import { RouterProvider } from "react-router-dom";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import ShopContextProvider from "./components/context/ShopContext.jsx";
// import ShopContextProvider from "./components/context/ShopContexts.jsx";
// import { ThemeProvider } from "@material-tailwind/react";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <ThemeProvider> */}
    <BrowserRouter>
      <ShopContextProvider>
        <App />
      </ShopContextProvider>
    </BrowserRouter>

    {/* </ThemeProvider> */}
  </StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const colors = {
  primary: {
    50: "#e5f6ff",
    100: "#b8e1ff",
    200: "#8bccff",
    300: "#5eb8ff",
    400: "#30a3ff",
    500: "#178fff",
    600: "#007bff",
    700: "#0062cc",
    800: "#004c99",
    900: "#003366",
  },
  secondary: {
    50: "#ffe5f0",
    100: "#ffaddc",
    200: "#ff76c8",
    300: "#ff3eb5",
    400: "#ff16a1",
    500: "#e6008c",
    600: "#cc0077",
    700: "#b30062",
    800: "#99004d",
    900: "#660033",
  },
  accent: {
    50: "#fff0e5",
    100: "#ffd6b8",
    200: "#ffbc8b",
    300: "#ffa25e",
    400: "#ff8930",
    500: "#ff7016",
    600: "#ff5700",
    700: "#cc4600",
    800: "#993500",
    900: "#662300",
  },
};

const theme = extendTheme({
  colors,
  styles: {
    global: {
      "html, body": {
        bg: "linear-gradient(135deg, #e5f6ff 33%, #ffe5f0 33%, #ffe5f0 66%, #fff0e5 66%)",
      },
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
);

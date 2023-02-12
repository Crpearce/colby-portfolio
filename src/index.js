import ReactDOM from "react-dom/client";
import App from "./App";
import { ModalProvider } from "./contexts/modal.context";
import { ThemeProvider } from "./contexts/theme.context";
import "./index.styles.css";

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(
  <ThemeProvider>
    <ModalProvider>
      <App />
    </ModalProvider>
  </ThemeProvider>
);

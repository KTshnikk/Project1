import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./app/App";
import "./index.css";
import { PrimeReactProvider } from "primereact/api";
import "primereact/resources/themes/saga-blue/theme.css"; // Тема PrimeReact
import "primereact/resources/primereact.min.css"; // Основные стили PrimeReact
import "primeicons/primeicons.css"; // Иконки PrimeIcons
import "primeflex/primeflex.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <PrimeReactProvider>
      <App />
    </PrimeReactProvider>
  </StrictMode>
);

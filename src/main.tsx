import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  // Removed <React.StrictMode> to avoid third-party widget loops in dev
  <App />
);

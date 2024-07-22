import ReactDOM from "react-dom/client";
import "./pages/styles/index.scss";
import "./pages/styles/theme.css";
import "./pages/styles/responsive.css";
import { routes } from "./router";

ReactDOM.createRoot(document.getElementById("root")!).render(routes());

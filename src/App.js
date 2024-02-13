import logo from "./logo.svg";
import "./App.css";
import "./style/reset.css";
import "./style/styleguide.css";
import { Layout } from "./pages/layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DashBoard } from "./pages/dashboard";
import { Home } from "./pages/home";

function App() {
  return (
    <>{window.location.pathname.includes("sign") ? <Layout /> : <Home />}</>
  );
}

export default App;

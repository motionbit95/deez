import logo from "./logo.svg";
import "./App.css";
import "./style/reset.css";
import "./style/styleguide.css";
import { Layout } from "./pages/layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DashBoard } from "./pages/dashboard";

function App() {
  const isAuth = false;
  return <>{!isAuth ? <Layout /> : <DashBoard />}</>;
}

export default App;

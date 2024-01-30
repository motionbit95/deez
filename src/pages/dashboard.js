import React from "react";
import "../style/dashboard.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Profile from "./profile";
import Downloads from "./downloads";
import BHeader from "../component/BHeader";

export const DashBoard = () => {
  return (
    <div id="container" className="container">
      <BHeader />
      <div id="body" className="body">
        <BrowserRouter>
          <Routes>
            <Route path="/profile/*" element={<Profile />} />
            <Route path="/downloads/*" element={<Downloads />} />
          </Routes>
        </BrowserRouter>
      </div>
      <div id="footer" className="footer">
        푸터
      </div>
    </div>
  );
};

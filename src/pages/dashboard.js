import React from "react";
import "../style/dashboard.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Profile from "./profile";

export const DashBoard = () => {
  return (
    <div id="container" className="container">
      <div id="header" className="header">
        헤더
      </div>
      <div id="body" className="body">
        <BrowserRouter>
          <Routes>
            <Route path="/profile/*" element={<Profile/>}/>
          </Routes>
        </BrowserRouter>
      </div>
      <div id="footer" className="footer">
        푸터
      </div>
    </div>
  );
};

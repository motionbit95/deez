import React from "react";
import "../style/dashboard.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Profile from "./profile";
import BHeader from "../component/BHeader";
import Uploadfiles from "./upload/uploadfiles";
import Adddetails from "./upload/adddetails";
import Addtags from "./upload/addtags";

export const DashBoard = () => {
  return (
    <div id="container" className="container">
      <BHeader />
      <div id="body" className="body">
        <BrowserRouter>
          <Routes>
            <Route path="/profile/*" element={<Profile />} />
            <Route path="/uploadfiles/*" element={<Uploadfiles />} />
            <Route path="/adddetails/*" element={<Adddetails />} />
            <Route path="/addtags/*" element={<Addtags />} />
          </Routes>
        </BrowserRouter>
      </div>
      <div id="footer" className="footer">
        푸터
      </div>
    </div>
  );
};

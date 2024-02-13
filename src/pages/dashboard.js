import React from "react";
import "../style/dashboard.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Profile from "./profile";
import BHeader from "../component/BHeader";
import Uploadfiles from "./upload/uploadfiles";
import Adddetails from "./upload/adddetails";
import Addtags from "./upload/addtags";
import Testpage from "./testpage";
import ResultForm from "../component/ResultForm";
import { Header } from "nabit-ui-test";

export const DashBoard = () => {
  return (
    <div id="container" className="container">
      <Header onLogin={() => window.location.replace("/signin")} />
      <div id="body" className="body">
        <BrowserRouter>
          <Routes>
            <Route path="/profile/*" element={<Profile />} />
            <Route path="/uploadfiles/*" element={<Uploadfiles />} />
            <Route path="/adddetails/*" element={<Adddetails />} />
            <Route path="/addtags/*" element={<Addtags />} />
            <Route path="/testpage/*" element={<Testpage />} />
            <Route path="/result/*" element={<ResultForm />} />
          </Routes>
        </BrowserRouter>
      </div>
      <div id="footer" className="footer">
        푸터
      </div>
    </div>
  );
};

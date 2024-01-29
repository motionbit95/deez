import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../style/account.css";
import { SignIn } from "./signin";
import { SignUp } from "./signup";

export const Layout = () => {
  return (
    <div id="layout" className="layout">
      {/** 여백 이미지 */}
      <div id="blank" className="blank">
        <img alt="여백이미지" src="" width={"100%"} height={"100%"} />
      </div>
      {/** 폼 */}
      <div id="form" className="form">
        <BrowserRouter>
          <Routes>
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
};

import React from "react";
import { useNavigate } from "react-router-dom";
import BSwitch from "../component/BSwitch";
import BInput from "../component/BInput";

export const Profile = () => {
  const navigate = useNavigate();
  function moveClose() {
    // 회원가입 페이지로 이동
    navigate("/signup");
  }
    return (
      <div>
        <div id="d-profile" className="d-profile">
          <div id="avatar-box" className="avatar-box">
          <img id="avatar-circle" className="avatar-circle" src={require("../image/google.png")}/>
          <div>username</div>
        </div>
        <div id="contents" className="contents">
          <div id="d1" className="d1">
            Connect
          </div>
          <div id="connect-social" className="connect-social">
            <button id="C-facebook" className="C-facebook">
              CONNECT WITH FACEBOOK
            </button>
            <button id="C-google" className="C-google">
              REGISTERED WITH GOOGLE
            </button>
          </div>
          <div id="pf-block" className="pf-block">
            <div id="d1" className="d1">
              Account data
            </div>
            <div id="ad" className="ad">
              <BInput label="username" />
              <BInput label="email" />
              <BInput label="Realname" />
            </div>
          </div>
          <div id="pf-block" className="pf-block">
            <div id="d1" className="d1">
              Notifications
            </div>
            <div id="swicth-c" className="swicth-c">
              <div id="d2" className="d2">
                Receive newsletters, promotions and news from Freepik Company
              </div>
              <BSwitch />
            </div>
            <div id="swicth-c" className="swicth-c">
              <div id="d2" className="d2">
                Notify me when someone I follow uploads new work
              </div>
              <BSwitch />
            </div>
          </div>
          <div id="pf-block" className="pf-block">
            <div id="account-close" className="account-close">
              <a id="link" className="link" onClick={moveClose}>
                Close my account
              </a>
            </div>
          </div>
          <div id="d-button" className="d-button">
            <div className="cancel-button">cancel</div>
            <div className="y-button">Save changes</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

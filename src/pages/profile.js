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
    <>
      <div id="profile_picture" className="profile_picture">
        <div id="avatar_box" className="avatar_box">
          <img src={require("../image/google.png")}></img>
          <div>username</div>
        </div>
        <div id="contents" className="contents">
          <div id="d1" className="d1">
            Connect
          </div>
          <div id="connect_social" className="connect_social">
            <button id="C_facebook" className="C_facebook">
              CONNECT WITH FACEBOOK
            </button>
            <button id="C_google" className="C_google">
              REGISTERED WITH GOOGLE
            </button>
          </div>
          <div id="pf_block" className="pf_block">
            <div id="d1" className="d1">
              Account data
            </div>
            <div id="ad" className="ad">
              <BInput label="username" />
              <BInput label="email" />
              <BInput label="Realname" />
            </div>
          </div>
          <div id="pf_block" className="pf_block">
            <div id="d1" className="d1">
              Notifications
            </div>
            <div id="swicth_c" className="swicth_c">
              <div id="d2" className="d2">
                Receive newsletters, promotions and news from Freepik Company
              </div>
              <BSwitch />
            </div>
            <div id="swicth_c" className="swicth_c">
              <div id="d2" className="d2">
                Notify me when someone I follow uploads new work
              </div>
              <BSwitch />
            </div>
          </div>
          <div id="pf_block" className="pf_block">
            <div id="account_close" className="account_close">
              <a id="link" className="link" onClick={moveClose}>
                Close my account
              </a>
            </div>
          </div>
          <div id="d_button" className="d_button">
            <button>cancel</button>
            <button>Save changes</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;

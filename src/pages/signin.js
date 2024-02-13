import { useNavigate } from "react-router-dom";
import "../style/account.css";

export const SignIn = () => {
  const navigate = useNavigate();
  function moveSignup() {
    // 회원가입 페이지로 이동
    navigate("/signup");
  }

  return (
    <>
      <div
        id="logo"
        className="logo"
        src={require("../image/deez_logo.png")}
      ></div>
      <div id="label" className="label">
        Log in
      </div>
      <div id="buttons" className="buttons">
        <div className="login_button">
          <img className="icon" src={require("../image/google.png")} />
          <div className="text">Continue with Google</div>
        </div>
        <div className="login_button">
          <img className="icon" src={require("../image/facebook.png")} />
          <div className="text">Continue with Facebook</div>
        </div>
        <div className="login_button">
          <img className="icon" src={require("../image/mail.png")} />
          <div className="text">Continue with email</div>
        </div>
      </div>
      <div id="t1" className="t1">
        <div>Don't you have an account?</div>
        <a id="link" className="link" onClick={moveSignup}>
          Sign up
        </a>
      </div>
    </>
  );
};

import { useNavigate } from "react-router-dom";
import "../style/account.css";

export const SignUp = () => {
  const navigate = useNavigate();
  function moveSignin() {
    // 회원가입 페이지로 이동
    navigate("/signin");
  }
  return (
    <>
      <div id="logo" className="logo">
        DEEZ
      </div>
      <div id="label" className="label">
        Create an account
      </div>
      <div id="buttons" className="buttons">
        <div className="login_button">Continue with Google</div>
        <div className="login_button">Continue with Facebook</div>
        <div className="login_button">Continue with email</div>
      </div>
      <div className="checkbox">
      <input type="checkbox"/>
      <div id="agree" className="agree">
        I do not wish to receive news and promotions from Freepik Company by email.
        </div>
        </div>
      <div id="t1" className="t1">
        <div>Already have an account?</div>
        <a id="link" className="link" onClick={moveSignin}>
          Log in
        </a>
      </div>
    </>
  );
};
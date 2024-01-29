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
      <div id="logo" className="logo">
        DEEZ
      </div>
      <div id="label" className="label">
        Log in
      </div>
      <div id="buttons" className="buttons">
        <button className="login_button">구글</button>
        <button className="login_button">페이스북</button>
        <button className="login_button">이메일</button>
      </div>
      <div id="t1" className="t1">
        <div>Don't you have an account?</div>
        <a className="link" onClick={moveSignup}>
          Sign up
        </a>
      </div>
    </>
  );
};

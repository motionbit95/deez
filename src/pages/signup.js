import { useNavigate } from "react-router-dom";
import "../style/account.css";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  FacebookAuthProvider,
  signInWithEmailAndPassword,
} from "firebase/auth";

export const SignUp = () => {
  const navigate = useNavigate();
  function moveSignin() {
    // 회원가입 페이지로 이동
    navigate("/signin");
  }

  const provider = new GoogleAuthProvider();

  const emailSingup = (e) => {
    e.preventDefault();

    console.log(e.target[0].value, e.target[1].value, e.target[2].value);

    const auth = getAuth();
    signInWithEmailAndPassword(auth, e.target[1].value, e.target[2].value)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  const googleSingup = (e) => {
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  const facebookSingup = (e) => {
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        // The signed-in user info.
        const user = result.user;

        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        const credential = FacebookAuthProvider.credentialFromResult(result);
        const accessToken = credential.accessToken;

        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = FacebookAuthProvider.credentialFromError(error);

        // ...
      });
  };

  return (
    <>
      <div id="logo" className="logo">
        DEEZ
      </div>
      <div id="label" className="label">
        Create an account
      </div>
      <div id="signinbuttons" className="signinbuttons">
        <div className="signin_button" onClick={googleSingup}>
          <img className="loginicon" src={require("../image/google.png")} />
        </div>
        <div className="signin_button" onClick={facebookSingup}>
          <img className="loginicon" src={require("../image/facebook.png")} />
        </div>
      </div>
      <form id="elogin" className="elogin" onSubmit={emailSingup}>
        <div className="emailloginbox">
          <input type="text" placeholder="Name" className="einput" />
          <input type="email" placeholder="Email" className="einput" />
          <input type="password" placeholder="Password" className="einput" />
        </div>
        <button type="submit" className="esubmit">
          Sign Up
        </button>
      </form>
      <div className="checkbox">
        <input type="checkbox" />
        <div id="agree" className="agree">
          I do not wish to receive news and promotions from DEEZ Company by
          email.
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

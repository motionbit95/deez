import { useNavigate } from "react-router-dom";
import "../style/account.css";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  FacebookAuthProvider,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { Button, IconButton, Input } from "nabit-ui-test";

export const SignUp = () => {
  const navigate = useNavigate();
  function moveSignin() {
    // 회원가입 페이지로 이동
    navigate("/signin");
  }

  const emailSingup = (e) => {
    e.preventDefault();

    console.log(e.target[0].value, e.target[1].value, e.target[2].value);

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, e.target[1].value, e.target[2].value)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...

        // 회원가입을 완료하였다면 로그인 페이지로 이동
        if (user) {
          window.location.replace("/signin");
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..

        alert(errorCode, errorMessage);
      });
  };

  const googleSingup = (e) => {
    const auth = getAuth();
    signInWithPopup(auth, new GoogleAuthProvider())
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        console.log(token);
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...

        // 계정 생성에 성공했다면, 홈으로 돌아갑니다.
        if (user) {
          window.location.replace("/");
        }
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

        alert(errorCode, errorMessage, email, credential);
      });
  };

  const facebookSingup = (e) => {
    const auth = getAuth();
    signInWithPopup(auth, new FacebookAuthProvider())
      .then((result) => {
        // The signed-in user info.
        const user = result.user;

        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        const credential = FacebookAuthProvider.credentialFromResult(result);
        const accessToken = credential.accessToken;
        console.log(accessToken);

        // IdP data available using getAdditionalUserInfo(result)
        // ...

        // 계정 생성에 성공했다면, 홈으로 돌아갑니다.
        if (user) {
          window.location.replace("/");
        }
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = FacebookAuthProvider.credentialFromError(error);

        console.log(email, credential);

        // ...
        alert(errorCode, errorMessage);
      });
  };

  return (
    <>
      <img
        alt="logo"
        id="logo"
        className="logo"
        src={require("../image/deez_logo.png")}
      />
      <div id="label" className="label">
        Create an account
      </div>
      <div id="buttons" className="buttons">
        <IconButton
          onClick={googleSingup}
          icon={"https://img.icons8.com/color/48/000000/google-logo.png"}
        />
        <IconButton
          onClick={facebookSingup}
          icon={"https://img.icons8.com/color/48/000000/facebook-new.png"}
        />
      </div>
      <form id="elogin" className="elogin" onSubmit={emailSingup}>
        <div className="emailloginbox">
          <Input
            type="text"
            placeholder="Please enter your name"
            label={"Name"}
            isRequired
          />
          <Input
            type="email"
            placeholder="Please enter your email"
            label={"Email"}
            isRequired
          />
          <Input
            type="password"
            placeholder="Please enter your password"
            label={"Password"}
            isRequired
          />
          {/* <input type="text" placeholder="Name" className="einput" />
          <input type="email" placeholder="Email" className="einput" />
          <input type="password" placeholder="Password" className="einput" /> */}
        </div>
        <Button
          type={"submit"}
          label={"Sign Up"}
          primary={true}
          style={{ width: "100px" }}
        />
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
        <a id="link" href="#!" className="link" onClick={moveSignin}>
          Log in
        </a>
      </div>
    </>
  );
};

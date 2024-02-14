import { useNavigate } from "react-router-dom";
import "../style/account.css";
import "../style/styleguide.css";
import { Button, IconButton, Input } from "nabit-ui-test";
import { useState } from "react";
import { motion } from "framer-motion";

import {
  FacebookAuthProvider,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../firebase/firebase_conf";

export const SignIn = () => {
  const navigate = useNavigate();
  const [visibleForm, setVisibleForm] = useState(false);
  const Variants = {
    initial: { y: -100, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  function moveSignup() {
    // 회원가입 페이지로 이동
    navigate("/signup");
  }

  const googleSignIn = (e) => {
    e.preventDefault();
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

        // 로그인에 성공했다면, 홈으로 돌아갑니다.
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
        console.log(email, credential);

        // alert(errorCode, errorMessage);
      });
  };

  const facebookSignIn = (e) => {
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

        // 로그인에 성공했다면, 홈으로 돌아갑니다.
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
        // alert(errorCode, errorMessage);
      });
  };

  const emailSignIn = (e) => {
    e.preventDefault();
    console.log(e.target[0].value, e.target[1].value);

    signInWithEmailAndPassword(auth, e.target[0].value, e.target[1].value)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
        // 로그인에 성공했다면, 홈으로 돌아갑니다.
        if (user) {
          window.location.replace("/");
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        // alert(errorCode, errorMessage);
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
        Log in
      </div>
      <div id="buttons" className="buttons">
        <IconButton
          onClick={googleSignIn}
          icon={"https://img.icons8.com/color/48/000000/google-logo.png"}
        />
        <IconButton
          onClick={facebookSignIn}
          icon={"https://img.icons8.com/color/48/000000/facebook-new.png"}
        />
        <IconButton
          icon={require("../image/mail.png")}
          onClick={() => {
            setVisibleForm(true);
          }}
        />
      </div>

      {visibleForm && (
        <motion.div
          className="login-form"
          initial="initial"
          animate="animate"
          variants={Variants}
          transition={{ duration: 0.5 }}
        >
          <form
            style={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              alignItems: "center",
            }}
            onSubmit={emailSignIn}
          >
            <Input
              type={"email"}
              placeholder={"Please enter your email."}
              label={"Email"}
              isRequired={true}
            />
            <Input
              type={"password"}
              placeholder={"Please enter your password."}
              label={"Password"}
              isRequired={true}
            />
            <Button
              type={"submit"}
              label={"Log in"}
              primary={true}
              style={{ width: "100px", marginTop: "10px" }}
            />
          </form>
        </motion.div>
      )}
      <div id="t1" className="t1">
        <div>Don't you have an account?</div>
        <a id="link" className="link" onClick={moveSignup}>
          Sign up
        </a>
      </div>
    </>
  );
};

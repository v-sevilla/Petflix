import React, { useRef } from "react";
import { auth } from "../firebase";
import "./SignupScreen.css";

function SignupScreen() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
        )
        .then((authUser) => {
            console.log(authUser);
        })
        .catch((error) => {
          alert(error.message);
        });
  };

  const signIn = (e) => {
    e.preventDefault();
  
    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
        )
        .then((authUser) => {
            console.log(authUser);
        })
        .catch((error) => 
          alert(error.message));
    };

  return (
    <div className="signupScreen">
      <form>
         <h1>Sign In | Sign Up</h1>
         <input ref={emailRef} placeholder="Email" type="email" />
         <input ref={passwordRef} placeholder="Password" type="password" />
         <button type="button" onClick={signIn}>Sign In</button>

         <h4>
            <span className="signupScreen__gray">New? </span> 
            <span className="signupScreen__link" onClick={register}>Click here to sign up meow.</span>
        </h4>
      </form>
    </div>
  )
}

export default SignupScreen;
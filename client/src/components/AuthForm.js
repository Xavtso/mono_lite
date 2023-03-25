import { useState } from "react";
import SignUp from "./SignUp";
import SignIn from "./SignIn";

const AuthForm = function () {
  const [modal, setModal] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);

  const toggleModal = function () {
    setModal(!modal);
    setShowSignIn(false);
  };

  const handleSignUp = function () {
    setShowSignIn(false);
  };

  const handleSignIn = function () {
    setShowSignIn(true);
  };

  return (
    <div>
      <button onClick={toggleModal}>Open Modal</button>
      {modal && (
        <div>
          {showSignIn ? (
            <SignIn handleSignUp={handleSignUp} />
          ) : (
            <SignUp handleSignIn={handleSignIn} />
          )}
        </div>
      )}
    </div>
  );
};

export default AuthForm;

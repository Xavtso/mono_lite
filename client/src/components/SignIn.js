import axios from "axios";
import { useEffect, useState } from "react";

const SignIn = function () {

const [message, setMessage] = useState('')

  const onSubmitHandler = function (e) {
    e.preventDefault();
    // console.log(e.target.elements[0].value);
    const email = e.target.elements[0].value;
    const password = e.target.elements[1].value;

    axios
      .post("http://localhost:5000/users/login", {
        email: email,
        password: password,
      })
      .then(function (response) {
        console.log(response.data.message);
      })
      .catch(function (error) {
        setMessage(error.response.data.message);
        
      });
  };
  
  
  return (
    <form onSubmit={onSubmitHandler}>
      <label>Email</label>
      <input
        type="email"
        name="email"
        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
        required
        title="Please enter a valid email address"
        autoComplete="email"
      />
      <label>Password</label>
      <input
        onKeyDown={(e) => {
          if (e.keyCode === 32) {
            e.preventDefault();
          }
        }}
        type="password"
        autoComplete="password"
        minLength={8}
      ></input>
      <button type="submit">Log In</button>
    {message}
    </form>
  );
};

export default SignIn;

//Not protected/private
//login in form that displays links to login and signupForm
//inputs for username and PW
//Login button
//The login function should save the returned token to localStorage. You can setup isLoading state in your Login component, and show a spinner on your form or in your button while the login request is happening.
//When the request returns, save the token to localStorage, then use the history object in your Login component to navigate your user to your FriendsList route.
import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import "../App.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

const Login = props => {
  //   console.log("Login", props);
  const [credentials, setCredentials] = useState({
    username: "",
    password: ""
  });
  const [isLoading, setIsLoading] = useState(false);

  //   console.log("Cred", credentials);
  const handleChange = e => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
  };

  const login = e => {
    e.preventDefault();
    setIsLoading(true);
    axiosWithAuth()
      .post("/login", credentials)
      .then(res => {
        sessionStorage.setItem("token", res.data.payload);
        props.history.push("/friends");
      })
      .catch(err => console.log(err));
  };

  return (
    <div>
      <form onSubmit={login}>
        <input
          type="text"
          name="username"
          value={credentials.username}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          value={credentials.password}
          onChange={handleChange}
        />
        <button>Log in</button>
      </form>
      <div className="loading">
        {isLoading && (
          <>
            <h2>Loading...</h2>
            <Loader type="Hearts" color="red" height={80} width={80} />
          </>
        )}
      </div>
    </div>
  );
};

export default Login;
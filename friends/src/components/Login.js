import React from "react";

const Login = () => {
  return (
    <div>
      <form>
        <h2>Enter Username</h2>
        <input type="username" name="username" />
        <h2>Enter Password</h2>
        <input type="password" name="password" />
        <button>Log in</button>
      </form>
    </div>
  );
};

export default Login;

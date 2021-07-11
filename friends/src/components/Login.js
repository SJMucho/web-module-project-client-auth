import React from "react";
import axios from "axios";
// import { render } from "sass";

class Login extends React.Component {
  state = {
    credentials: {
      username: "Lambda",
      password: "School",
    },
  };

  handleChanges = (e) => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value,
      },
    });
  };

  login = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/login", this.state.credentials)
      .then((res) => {
        localStorage.setItem("token", res.data.payload);
        console.log("Logged in");
      })
      .catch((err) => console.log("not able to login"));
  };

  render() {
    return (
      <div>
        <form onSubmit={this.login}>
          <input
            name="username"
            type="username"
            value={this.state.credentials.username}
            onChange={this.handleChanges}
          />
          <input
            type="password"
            name="password"
            value={this.state.credentials.password}
            onChange={this.handleChanges}
          />
          <button>Login</button>
        </form>
      </div>
    );
  }
}

export default Login;

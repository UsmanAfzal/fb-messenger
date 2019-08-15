import React, { Component } from "react";
import "./Login.css";

class Login extends Component {
  state = {
    email: "",
    password: ""
  }

  handleChange = (name, event) => {
    let change = {};
    change[name] = event.target.value;
    this.setState(change)
  };

  handleSubmit = async e => {
    // When the button(which type=submit) is clicked, we can stop the form submission by doing:
    e.preventDefault();

    const { history } = this.props;
    const { password, email } = this.state;

    if(!password || !email) {
      alert('Email and password are required');
    }

    const { status } = await fetch("/api/auth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "include",
      body: JSON.stringify({ password, email })
    });

    if (status === 200) {
      history.push("/")
    }
  };

  render() {
    return (
      <form className="form-signin" onSubmit={this.handleSubmit}>
        <div className="form-group">
          <h2 className="form-signin-heading">Please sign in</h2>
        </div>
        <div className="form-group">
          <input
            type="email"
            placeholder="Enter email"
            className="form-control"
            value={this.state.email}
            onChange={e => this.handleChange("email", e)}
          />
          <input
            type="password"
            placeholder="Enter password"
            className="form-control"
            value={this.state.password}
            onChange={e => this.handleChange("password", e)}
          />
        </div>
        <button type="submit" className="btn btn-lg btn-primary btn-block">
          Sign in
        </button>
      </form>
    );
  }
}

export default Login;

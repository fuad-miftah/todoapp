import React from "react";
import { Link } from "react-router-dom";
import AuthUser from "../services/AuthUser";

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      error: null
    };
  }

  handleChange = event => {
    const input = event.target;
    const value = input.type === "checkbox" ? input.checked : input.value;

    this.setState({ [input.name]: value });
  };

  onLogIn = e => {
    e.preventDefault();
    let username = this.state.username;
    let password = this.state.password;
    AuthUser.login(username, password)
      .then(() => {
        this.props.history.push("/");
      })
      .catch(error =>
        this.setState({
          error: error
        })
      );
  };

  render() {
    const errorHtml = this.state.error ? (
      <div class="alert alert-danger" role="alert">
        {this.state.error}
      </div>
    ) : (
      ""
    );
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <div className="card card-signin my-5">
              <div className="card-body">
                {errorHtml}
                <h5 className="card-title text-center">Sign In</h5>
                <form className="form-signin" onSubmit={this.onLogIn}>
                  <div className="form-label-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Username"
                      name="username"
                      value={this.state.user}
                      onChange={this.handleChange}
                      required
                      autoFocus
                    />
                    <label>Username</label>
                  </div>

                  <div className="form-label-group">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Password"
                      name="password"
                      value={this.state.password}
                      onChange={this.handleChange}
                      required
                    />
                    <label>Password</label>
                  </div>

                  <button
                    className="btn btn-lg btn-primary btn-block text-uppercase"
                    type="submit"
                  >
                    Log in
                  </button>
                  <hr className="my-4" />

                  <Link to="/registration">
                    <button className="btn btn-lg btn-block btn-secondary text-uppercase">
                      <i className="fab fa-google mr-2" />
                      Register
                    </button>
                  </Link>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;

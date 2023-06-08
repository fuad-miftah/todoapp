import React from "react";
import { withRouter } from "react-router-dom";
import AuthUser from "../services/AuthUser";

class Header extends React.Component {
  onLogOut() {
    AuthUser.logout(() => {
      this.props.history.push("/login");
    });
  }
  onCompleted() {
      this.props.history.push("/complete");
  }

  render() {
    const authUser = AuthUser.isSignedIn();

    return authUser ? (
      <React.Fragment>
        <nav className="navbar navbar-light bg-secondary text-light">
          TodoList
          <ul className="navbar-nav ml-auto flex-row">
          <li className="nav-item mr-3">
            <a className="nav-link" href="/" style={{color: "white"}}>Uncompleted List</a>
          </li>
          <li className="nav-item mr-3">
            <a className="nav-link" href="/" style={{color: "white"}}>Completed List</a>
          </li>
          <li className="nav-item">
            <button className="btn btn-primary" onClick={() => this.onLogOut()}>
              Logout
            </button>
          </li>
        </ul>
        </nav>
      </React.Fragment>
    ) : (
      ""
    );
  }
}

export default withRouter(Header);

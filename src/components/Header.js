import React from "react";
import { withRouter } from "react-router-dom";
import AuthUser from "../services/AuthUser";

class Header extends React.Component {
  onLogOut() {
    AuthUser.logout(() => {
      this.props.history.push("/login");
    });
  }

  render() {
    const authUser = AuthUser.isSignedIn();

    return authUser ? (
      <React.Fragment>
        <nav className="navbar navbar-light bg-secondary text-light">
          TodoList
          <button className="btn btn-primary" onClick={() => this.onLogOut()}>
            Logout
          </button>
        </nav>
      </React.Fragment>
    ) : (
      ""
    );
  }
}

export default withRouter(Header);

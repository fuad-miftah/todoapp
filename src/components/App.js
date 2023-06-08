import React from "react";
import { Route, Switch } from "react-router-dom";
import { ProtectedRoute } from "./ProtectedRoute";

import Login from "./Login";
import Register from "./Register";
import TodoList from "./TodoList";
import Complete from "./complete";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/registration" component={Register} />
          <ProtectedRoute exact path="/" component={TodoList} />
          <ProtectedRoute exact path="/complete" component={Complete} />
          <Route path="*" component={() => "404 NOT FOUND"} />
        </Switch>
      </div>
    );
  }
}

export default App;

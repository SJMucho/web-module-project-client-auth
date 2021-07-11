import "./App.css";
import Login from "./components/Login";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import FriendsList from "./components/FriendsList";

function App() {
  return (
    <Router>
      <div>
        <Link to="/login">Login</Link>
        <Link to="/friends">Friends</Link>
        <Link to="/privateroute">Private Route</Link>

        <Switch>
          <PrivateRoute exact path="privateroute" component={PrivateRoute} />
          <Route path="/login" component={Login} />
          <Route path="friends" component={FriendsList} />
          <Route component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

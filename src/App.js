import React from "react";
import { Route, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Profiles from "./components/Profiles";
import HistorySample from "./components/HistorySample";

function App() {
  return (
    <div>
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/about">
          <li>About</li>
        </Link>
        <Link to="/profiles">
          <li>Profile</li>
        </Link>
        <Link to="/history">
          <li>History</li>
        </Link>
      </ul>
      <Route path="/" component={Home} exact />
      <Route path="/about" component={About} />
      <Route path="/profiles" component={Profiles} />
      <Route path='/history' component={HistorySample} />
    </div>
  );
}

export default App;

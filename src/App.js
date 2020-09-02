import React from "react";
import { Route, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";

function App() {
  return (
    <div>
      <ul>
        <Link to='/'><li>Home</li></Link>
        <Link to='/about'><li>About</li></Link>
      </ul>
      <Route path="/" component={Home}exact />
      <Route path="/about" component={About} />
    </div>
  );
}

export default App;

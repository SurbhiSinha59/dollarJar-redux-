import React from "react";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Home from "./Home";
import DollarJar from "./components/DollarJar";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/dollarJar" component={DollarJar} />
        </div>
      </Router>
    </div>
  );
}

export default App;

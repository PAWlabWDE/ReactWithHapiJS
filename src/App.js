import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Inne } from "./Inne";
import Wykres from "./Wykres";
//import { Losowanie } from "./Losowanie";
import React from "react";
//może i takx
function App() {
  return (
    <Router>
      <container
        class="container"
        role="main"
        style={{
          height: "100%",
          position: "absolute",
          left: "0px",
          width: "100%",
          overflow: "hidden"
        }}
      >
        <aside class="aside">ASIDE</aside>

        <header class="header">HEADERR</header>

        <nav class="nav">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/plot">Plot</Link>
            </li>
          </ul>
        </nav>

        <section class="section">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
            <Route path="/plot">
              <Wykres />
            </Route>
            {/* <Route path="/random">
              <Losowanie />
            </Route> */}
          </Switch>
        </section>

        <footer class="footer">
          <Switch>
            <Route exact path="/inne">
              <Inne />
            </Route>
          </Switch>
        </footer>
      </container>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <Link to="/inne">
        <h2>chodzmy do innych w stopce</h2>
      </Link>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}
export default App;

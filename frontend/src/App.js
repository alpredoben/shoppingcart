import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import routes from './routes';
import data from "./data";


function App() {
  const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open");
  };

  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open");
  };

  const menuRoutes = routes.map((r, index) => {
    return (r.component) ? (
      <Route 
        key={index}
        path={r.path}
        exact={r.exact}
        name={r.name}
        render={props => (<r.component {...props}/>)}
      />
    ) : (null);
  })

  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="header">
          <div className="brand">
            <button onClick={openMenu}>&#9776;</button>
            <Link to="/">Amazona</Link>
          </div>

          <div className="header-links">
            <a href="">Cart</a>
            <a href="">Sign In</a>
          </div>
        </header>

        <aside className="sidebar">
          <h3>Shopping Categories</h3>
          <button className="sidebar-close-button" onClick={closeMenu}>
            x
          </button>
          <ul>
            <li>
              <a href="">Pants</a>
            </li>
            <li>
              <a href="">Shirt</a>
            </li>
          </ul>
        </aside>

        <main className="main">
          <div className="content">
            <Switch>
              {menuRoutes}
            </Switch>
          </div>
        </main>

        <footer className="footer">&copy; alpredoruben</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;

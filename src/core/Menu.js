import React from "react";
import { Link, withRouter } from "react-router-dom";

const Menu = ({ history }) => (
  <div>
    <ul className="nav navbar-expand-lg navbar-dark bg-dark text-white">
      <li className="nav-item">
        <Link className="nav-link" to="/">
          Home
        </Link>
      </li>
      <li className="">
        <Link className="nav-link" to="/restaurant">
          Restaurant
        </Link>
      </li>
    </ul>
  </div>
);

export default Menu;

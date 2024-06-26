import React from "react";
import "./resources/css/styles/CSS.css";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div>
      <div className="navbar">
        <div className="log">Shopio</div>

        <nav className="nav-links">
          <Link to="/">Login1</Link>&nbsp;
          <Link to="/login">Login</Link>&nbsp;
          <Link to="/gallery">Gallery</Link>&nbsp;
          <Link to="/guest">Guest List</Link>&nbsp;
          <Link to="/user">User Search</Link>&nbsp;
          <Link to="/code">Leet Code</Link>&nbsp;
        </nav>
      </div>

      <div>
        <h1>-------------------------</h1>
        <form action="/api/register-user" method="POST">
          <input type="text" name="user-name-1" id="" />
          <input type="text" name="email-2" id="" />
          <input type="submit" value="submit" />
        </form>
        <h1>-------------------------</h1>
      </div>
    </div>
  );
}

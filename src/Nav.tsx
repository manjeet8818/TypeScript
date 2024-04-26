import React from "react";
import "./resources/css/styles/CSS.css";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div className="navbar">
      <div className="log">Shopio</div>

      <nav className="nav-links">
        <Link to="/">Home</Link>&nbsp;
        <Link to="/gallery">Gallery</Link>&nbsp;
        <Link to="/guest">Guest List</Link>&nbsp;
        <Link to="/user">User Search</Link>&nbsp;
        <Link to="/code">Leet Code</Link>&nbsp;
      </nav>
    </div>
  );
}

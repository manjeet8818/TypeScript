import React from "react";
import "./resources/css/styles/CSS.css";
import GuestList from "./state/GuestList";
import PhotoGallary from "./state/PhotoGallary";
import UserSearch from "./state/UserSearch";
import Nav from "./Nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LeetCode from "./state/LeetCode";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Nav />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<PhotoGallary />} />
          <Route path="/guest" element={<GuestList />} />
          <Route path="/user" element={<UserSearch />} />
          <Route path="/code" element={<LeetCode />} />
        </Routes>
      </div>
    </Router>
  );
}

function Home() {
  return <h1>Home page</h1>;
}

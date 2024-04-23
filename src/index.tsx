import * as React from 'react'
import { HashRouter as Router, Route, Link, Routes } from 'react-router-dom'
import { render } from 'react-dom';
import {Home, Foo, Bar} from './Page';
import PhotoGallary from "./state/PhotoGallary";
import GuestList from './state/GuestList';
import UserSearch from './state/UserSearch';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <div className="App">
            <header className="App-header">
              <h1>Welcome to the Photo Gallary </h1>
            </header>
          </div>
          <nav>
            <Link to="/">Home</Link>&nbsp;
            <Link to="/gallery">Gallery</Link>&nbsp;
            <Link to="/guest">Guest List</Link>&nbsp;
            <Link to="/user">User Search</Link>&nbsp;
          </nav>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/gallery" element={<PhotoGallary/>} />
            <Route path="/guest" element={<GuestList/>} />
            <Route path="/user" element={<UserSearch/>} />
          </Routes>
        </div>
      </Router>
    );
  }
}

render(<App />, document.getElementById('root'));

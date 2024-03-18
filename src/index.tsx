import ReactDOM from "react-dom";
// import GuestList from "./state/GuestList";
// import UserSearch from "./state/UserSearch";
import PhotoGallary from "./state/PhotoGallary";
const App = () => {
  return (
    <div>
      <div className="App">
        <header className="App-header">
          <h1>Welcome to the Photo Gallary </h1>
        </header>
      </div>

      <ul>
        <li>
          <a className="active" href="#home">
            Home
          </a>
        </li>
        <li>
          <a href="#news">News</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
      </ul>
      <PhotoGallary />
      {/* <GuestList />
      <UserSearch /> */}
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));

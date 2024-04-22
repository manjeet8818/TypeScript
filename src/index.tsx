// import GuestList from "./state/GuestList";
// import UserSearch from "./state/UserSearch";
import PhotoGallary from "./state/PhotoGallary";

import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";

// const App = () => {
const App: React.FC = () => {
  return (
    <div>
      <div className="App">
        <header className="App-header">
          <h1>Welcome to the Photo Gallary </h1>
        </header>
      </div>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>

      <PhotoGallary />
      {/* <GuestList />
      <UserSearch /> */}
    </div>
  );
};

// ReactDOM.render(<App />, document.querySelector("#root"));

export default App;

// import React from "react";
// import "./resources/css/styles/CSS.css";
// import GuestList from "./state/GuestList";
// import PhotoGallary from "./state/PhotoGallary";
// import UserSearch from "./state/UserSearch";
// import Nav from "./Nav";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import LeetCode from "./state/LeetCode";
// import Login from "../src/pages/Login";

// export default function App() {
//   return (
//     <Router>
//       <div className="App">
//         <Nav />

//         <Routes>
//           <Route path="/" element={<Login />} />
//           <Route path="/gallery" element={<PhotoGallary />} />
//           <Route path="/guest" element={<GuestList />} />
//           <Route path="/user" element={<UserSearch />} />
//           <Route path="/code" element={<LeetCode />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// // function Home() {
// //   return <h1>Home page</h1>
// //   <div>sdfsfd</div>
// //   ;
// // }
import React from "react";
import "./resources/css/styles/CSS.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GuestList from "./state/GuestList";
import PhotoGallary from "./state/PhotoGallary";
import UserSearch from "./state/UserSearch";
import Nav from "./Nav";
import LeetCode from "./state/LeetCode";
import Login from "./pages/Login";
import Login1 from "./pages/Login1";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Nav />

        <Routes>
          <Route path="/" element={<Login1 />} />
          <Route path="/" element={<Login />} />
          <Route path="/gallery" element={<PhotoGallary />} />
          <Route path="/guest" element={<GuestList />} />
          <Route path="/user" element={<UserSearch />} />
          <Route path="/code" element={<LeetCode />} />
        </Routes>
      </div>
    </Router>
  );
}

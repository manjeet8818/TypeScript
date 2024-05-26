import React from "react";
import "../resources/css/styles/style.css";
// import YourComponent from "../resources/css/js_files/script";

const Login1: React.FC = () => {
  return (
    <div>
      <h2>Hello world!</h2>
      <form action="/api/register-user" method="POST">
        <input type="text" name="user-name-1" id="user-name-1" />
        <input type="text" name="email-2" id="email-2" />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default Login1;

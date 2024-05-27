// import React from "react";
// import "../resources/css/styles/style.css";
// import "../resources/css/js_files/script.js";

// const Login: React.FC = () => {
//   return (
//     <body>
//       <button className="butto" id="form-open">
//         Login
//       </button>

//       <section className="home">
//         <div className="form_container">
//           <i className="uil uil-times form_close"></i>
//           <div className="form login_form">
//             <form action="#">
//               <h2>Login</h2>

//               <div className="input_box">
//                 <input type="email" placeholder="Enter your email" required />
//                 <i className="uil uil-envelope-alt email"></i>
//               </div>
//               <div className="input_box">
//                 <input
//                   type="password"
//                   placeholder="Enter your password"
//                   required
//                 />
//                 <i className="uil uil-lock password"></i>
//                 <i className="uil uil-eye-slash pw_hide"></i>
//               </div>

//               <button className="button">Login Now</button>

//               {/* <div className="login_signup">Don't have an account? <a href="#" id="signup">Signup</a></div> */}
//             </form>
//           </div>

//           <div className="form signup_form">
//             <form action="#">
//               <h2>Signup</h2>

//               <div className="input_box">
//                 <input type="email" placeholder="Enter your email" required />
//                 <i className="uil uil-envelope-alt email"></i>
//               </div>
//               <div className="input_box">
//                 <input type="password" placeholder="Create password" required />
//                 <i className="uil uil-lock password"></i>
//                 <i className="uil uil-eye-slash pw_hide"></i>
//               </div>
//               <div className="input_box">
//                 <input
//                   type="password"
//                   placeholder="Confirm password"
//                   required
//                 />
//                 <i className="uil uil-lock password"></i>
//                 <i className="uil uil-eye-slash pw_hide"></i>
//               </div>

//               <button className="button">Signup Now</button>

//               {/* <div className="login_signup">Already have an account? <a href="#" id="login">Login</a></div> */}
//             </form>
//           </div>
//         </div>
//       </section>
//       <script src="../resources/css/js_files/script.js"></script>
//     </body>
//   );
// };

// export default Login;

import React from "react";

const Login: React.FC = () => {
  return (
    <div>
      <h1>WHats upppppp</h1>
      <form action="/api/register-user" method="POST">
        <input type="text" name="user-name-1" />
        <input type="text" name="email-2" />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default Login;

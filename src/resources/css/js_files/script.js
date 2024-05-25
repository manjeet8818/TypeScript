// const formOpenBtn = document.querySelector("#form-open"),
//   home = document.querySelector(".home"),
//   formContainer = document.querySelector(".form_container"),
//   formCloseBtn = document.querySelector(".form_close"),
//   signupBtn = document.querySelector("#signup"),
//   loginBtn = document.querySelector("#login"),
//   pwShowHide = document.querySelectorAll(".pw_hide");

// formOpenBtn.addEventListener("click", () => home.classList.add("show"));
// formCloseBtn.addEventListener("click", () => home.classList.remove("show"));

// pwShowHide.forEach((icon) => {
//   icon.addEventListener("click", () => {
//     let getPwInput = icon.parentElement.querySelector("input");
//     if (getPwInput.type === "password") {
//       getPwInput.type = "text";
//       icon.classList.replace("uil-eye-slash", "uil-eye");
//     } else {
//       getPwInput.type = "password";
//       icon.classList.replace("uil-eye", "uil-eye-slash");
//     }
//   });
// });

// signupBtn.addEventListener("click", (e) => {
//   e.preventDefault();
//   formContainer.classList.add("active");
// });
// loginBtn.addEventListener("click", (e) => {
//   e.preventDefault();
//   formContainer.classList.remove("active");
// });



import React, { useState } from 'react';
import "../styles/style.css"; // Make sure to include your CSS file

function YourComponent() {
  const [isHomeShown, setIsHomeShown] = useState(false);
  const [isFormActive, setIsFormActive] = useState(false);
  const [showPassword, setShowPassword] = useState({}); // Track password visibility per input

  const handlePasswordToggle = (index) => {
    setShowPassword(prevState => ({
      ...prevState,
      [index]: !prevState[index]
    }));
  };

  const openForm = () => {
    setIsHomeShown(true);
  };

  const closeForm = () => {
    setIsHomeShown(false);
  };

  const toggleForm = () => {
    setIsFormActive(!isFormActive);
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    toggleForm();
  };

  const handleLogin = (e) => {
    e.preventDefault();
    toggleForm();
  };

  return (
    <div>
      <button id="form-open" onClick={openForm}>Open Form</button>
      
      <div className={`home ${isHomeShown ? 'show' : ''}`}>
        <div className={`form_container ${isFormActive ? 'active' : ''}`}>
          <button className="form_close" onClick={closeForm}>Close Form</button>

          <button id="signup" onClick={handleSignUp}>Sign Up</button>
          <button id="login" onClick={handleLogin}>Log In</button>

          <div className="password-container">
            <input type={showPassword[0] ? 'text' : 'password'} />
            <span
              className={`pw_hide ${showPassword[0] ? 'uil-eye' : 'uil-eye-slash'}`}
              onClick={() => handlePasswordToggle(0)}
            ></span>
          </div>

          <div className="input_box">
            <input type="email" placeholder="Enter your email" required />
            <i className="uil uil-envelope-alt email"></i>
          </div>

          <div className="password-container">
            <input type={showPassword[1] ? 'text' : 'password'} />
            <span
              className={`pw_hide ${showPassword[1] ? 'uil-eye' : 'uil-eye-slash'}`}
              onClick={() => handlePasswordToggle(1)}
            ></span>
          </div>
          {/* Add more password containers as needed */}
        </div>
      </div>
    </div>
  );
}

export default YourComponent;



// import React, { useState } from 'react';
// import "../styles/style.css"; // Make sure to include your CSS file

// function YourComponent() {
//   const [isHomeShown, setIsHomeShown] = useState(false);
//   const [isFormActive, setIsFormActive] = useState(false);
//   const [showPassword, setShowPassword] = useState({}); // Track password visibility per input

//   const handlePasswordToggle = (index) => {
//     setShowPassword(prevState => ({
//       ...prevState,
//       [index]: !prevState[index]
//     }));
//   };

//   return (
//     <div>
//       <button id="form-open" onClick={() => setIsHomeShown(true)}>Open Form</button>
      
//       <div className={`home ${isHomeShown ? 'show' : ''}`}>
//         <button className="form_close" onClick={() => setIsHomeShown(false)}>Close Form</button>
        
//         <div className={`form_container ${isFormActive ? 'active' : ''}`}>
//           <button id="signup" onClick={() => setIsFormActive(true)}>Sign Up</button>
//           <button id="login" onClick={() => setIsFormActive(false)}>Log In</button>

//           <div className="password-container">
//             <input type={showPassword[0] ? 'text' : 'password'} />
//             <span
//               className={`pw_hide ${showPassword[0] ? 'uil-eye' : 'uil-eye-slash'}`}
//               onClick={() => handlePasswordToggle(0)}
//             ></span>
//           </div>
//           <div className="password-container">
//             <input type={showPassword[1] ? 'text' : 'password'} />
//             <span
//               className={`pw_hide ${showPassword[1] ? 'uil-eye' : 'uil-eye-slash'}`}
//               onClick={() => handlePasswordToggle(1)}
//             ></span>
//           </div>
//           {/* Add more password containers as needed */}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default YourComponent;

import React, { useState } from "react";
import "../resources/css/styles/style.css";

const Login1: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await fetch("/api/register-user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, email }),
    });
    const result = await response.text();
    console.log(result); // Handle the response as needed
  };

  return (
    <div>
      <h2>Hello world!</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="user-name-1"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="text"
          name="email-2"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default Login1;
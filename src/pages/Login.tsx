import React, { useState } from 'react';

const RegisterForm: React.FC = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/register-user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email }),
      });
      if (response.ok) {
        const data = await response.text();
        alert(data);
      } else {
        alert('Error registering user');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error registering user');
    }
  };

  return (
    <div>
      <h2>Hello world two!</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="user-name-1"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="text"
          name="email-2"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default RegisterForm;

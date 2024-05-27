import React, { useState } from 'react';

const UserForm: React.FC = () => {
    const [userName, setUserName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [response, setResponse] = useState<string>('');

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        
        const formData = new FormData();
        formData.append('user-name-17', userName);
        formData.append('email-2', email);

        try {
            const res = await fetch('/register-user', {
                method: 'POST',
                body: formData,
            });
            
            const text = await res.text();
            setResponse(text);
        } catch (error) {
            console.error('Error:', error);
            setResponse('Error occurred');
        }
    };

    return (
        <div>
            <h2>Hello world!</h2>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    name="user-name-17" 
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    placeholder="Username"
                />
                <input 
                    type="text" 
                    name="email-2" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                />
                <input type="submit" value="Submit" />
            </form>
            {response && <p>{response}</p>}
        </div>
    );
};

export default UserForm;

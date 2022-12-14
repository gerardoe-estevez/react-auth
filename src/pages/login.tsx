import React, { SyntheticEvent, useState } from 'react';
import { Navigate } from 'react-router-dom';

const Login = (props: {setName: (name: string) => void}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);

    const submit = async (e: SyntheticEvent) => {
        e.preventDefault();

        const response = await fetch('http://localhost:8000/api/login', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            credentials: 'include',
            body: JSON.stringify({
                email,
                password
            })
        });
        const content = await response.json();

        setRedirect(true);
        props.setName(content.name);

    }

    if (redirect) {
        return <Navigate to='/'/>;
    }


    return (
        <form onSubmit={submit}>
          <h1 className="h3 mb-3 fw-normal">Please login</h1>
          <div className="form-floating">
            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"
              onChange={e => setEmail(e.target.value)}
            />
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div className="form-floating">
            <input type="password" className="form-control" id="floatingPassword" placeholder="Password"
              onChange={e => setPassword(e.target.value)}
            />
            <label htmlFor="floatingPassword">Password</label>
          </div>
          <button className="w-100 btn btn-lg btn-primary" type="submit">Login</button>
        </form>
    );
};

export default Login;
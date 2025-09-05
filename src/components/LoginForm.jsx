import axios from 'axios';
import React, { useState } from 'react';
import { useAuthContext } from '../contexts/AuthContext';
import { useHistory } from 'react-router-dom';

function LoginForm() {
  const [form, setForm] = useState({
    username: '',
    password: '',
  });
  const { login } = useAuthContext();
  const history = useHistory();

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('https://nextgen-project.onrender.com/api/s11d2/login', form)
      .then((response) => {
        console.log(response.data);
        history.push('/friends');
        return login(response.data);
      })
      .catch((error) => console.error(error));
    setForm({
      username: '',
      password: '',
    });
  };

  return (
    <div>
      <div className="loginFormMainDiv">
        <h1>LOGIN</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">
            <h2>Username</h2>
          </label>
          <input
            placeholder="Username"
            id="username"
            name="username"
            value={form.username}
            onChange={handleChange}
          />
          <label htmlFor="password">
            <h2>Password</h2>
          </label>
          <input
            placeholder="Password"
            id="password"
            name="password"
            type="password"
            value={form.password}
            onChange={handleChange}
          />
          <button>SUBMIT</button>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;

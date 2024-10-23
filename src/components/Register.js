import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    role: 'Student',
    password: '',
  });

  const { name, email, phoneNumber, role, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/auth/register', formData);
      console.log(res.data);
    } catch (error) {
      console.error(error.response.data);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type='text'
        name='name'
        value={name}
        onChange={onChange}
        placeholder='Name'
        required
      />
      <input
        type='email'
        name='email'
        value={email}
        onChange={onChange}
        placeholder='Email'
        required
      />
      <input
        type='text'
        name='phoneNumber'
        value={phoneNumber}
        onChange={onChange}
        placeholder='Phone Number'
        required
      />
      <select name='role' value={role} onChange={onChange}>
        <option value='Student'>Student</option>
        <option value='Teacher'>Teacher</option>
        <option value='Institute'>Institute</option>
      </select>
      <input
        type='password'
        name='password'
        value={password}
        onChange={onChange}
        placeholder='Password'
        required
      />
      <button type='submit'>Register</button>
    </form>
  );
};

export default Register;

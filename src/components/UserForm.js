import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserForm = ({ match }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    role: 'Student',
  });

  const { name, email, phoneNumber, role } = formData;

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/api/users/${match.params.id}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });
      setFormData(res.data);
    };
    if (match.params.id) {
      fetchUser();
    }
  }, [match.params.id]);

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      if (match.params.id) {
        await axios.put(`/api/users/${match.params.id}`, formData, {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
        });
      } else {
        await axios.post('/api/users', formData, {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
        });
      }
      window.location.href = '/';
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
      <button type='submit'>Submit</button>
    </form>
  );
};

export default UserForm;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import UserList from './components/UserList';
import UserForm from './components/UserForm';

function App() {
  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/users/new' element={<UserForm />} />
          <Route path='/users/:id' element={<UserForm />} />
          <Route path='/' element={<UserList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

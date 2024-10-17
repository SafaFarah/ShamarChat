import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import "./App.css" ;
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Chat from './pages/Chat';
import Profile from './pages/Profile';
import { useAuthContext } from './context/auth_context';

function App() {
  const { currentUser } = useAuthContext();
  return (
    <Routes>
      <Route path='/' element={currentUser ? <Navigate to='/chat' /> : <Home />} />
      <Route path='/login' element={currentUser ? <Navigate to='/chat' /> : <Login />} />
      <Route path='/signup' element={currentUser ? <Navigate to='/chat' /> : <Signup />} />
      <Route path='/chat' element={currentUser ? <Chat /> : <Navigate to={"/login"} />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
};

export default App;
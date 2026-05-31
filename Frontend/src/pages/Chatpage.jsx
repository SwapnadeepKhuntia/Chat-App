import React from 'react'
import { logoutAccount } from '../store/slices/AuthSlices'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';

function Chatpage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  async function handleLogout(e) {
    e.preventDefault();
    const res = await dispatch(logoutAccount()); 
    if(res?.payload)     navigate("/login");
  }
  return (
    <button onClick={handleLogout} className='bg-fuchsia-700'>Logout</button>
  )
}

export default Chatpage
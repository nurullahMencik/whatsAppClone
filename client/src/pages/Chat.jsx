import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../redux/slices/userSlice';
import SideBar from '../components/SideBar';
import ChatDetails from './ChatDetails';

const Chat = () => {
  const dispatch = useDispatch();

  return (
    <div className='flex h-screen w-full'>

      <SideBar />
      

      <ChatDetails />

      <div className='absolute top-2 right-2 z-10'>
        <button 
          className='bg-blue-700 p-2 text-white rounded-md' 
          onClick={() => dispatch(logout())}
        >
          LOG OUT
        </button>
      </div>
    </div>
  );
};

export default Chat;
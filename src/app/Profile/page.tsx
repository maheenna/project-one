'use client'
import React, { useState } from 'react';

const Profile = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  return (
    <div className='w-full min-h-screen flex items-center justify-center bg-orange-50 shadow-md'>
      <div className='w-[90%] md:w-[32%] h-auto py-10 px-6 md:px-12 rounded-xl logincard'>
        <h1 className='text-[1.475rem] text-black font-semibold mb-1'>Sign In</h1>
        <p className='text-sm text-black font-normal mb-8'>
          Welcome back, you've been missed
        </p>
        <div className='w-full h-auto flex flex-col gap-4 md:flex-row md:gap-7'>
          <button className='w-full md:w-1/2 h-12 p-4 outline-none justify-center bg-transparent border-[2px] border-gray-800 text-black rounded-md flex items-center gap-x-2 hover:bg-gray-100/10 ease-out duration-700'>
            Google
          </button>
          <button className='w-full md:w-1/2 h-12 p-4 outline-none justify-center bg-transparent border-[2px] border-gray-800 text-black rounded-md flex items-center gap-x-2 hover:bg-gray-100/10 ease-out duration-700'>
            Facebook
          </button>
        </div>
        <div className='w-full h-auto flex items-center gap-x-1 my-5 '>
          <div className='w-1/2 h-[1.5px] bg-gray-200/40 rounded-md'></div>
          <p className='text-sm text-black font-normal px-2'>OR</p>
          <div className='w-1/2 h-[1.5px] bg-gray-200/40 rounded-md '></div>
        </div>
        <form>
          <div className='w-full h-auto mb-5'>
            <label htmlFor="username" className='block text-black mb-1'>Username</label>
            <input type="text" id='username' className='w-full h-12 p-4 outline-none bg-transparent border-[2px] border-gray-200/40 text-black rounded-md ' placeholder='Enter your username' value={username} onChange={handleUsernameChange} />
          </div>
          <div className='w-full h-auto mb-5'>
            <label htmlFor="password" className='block text-black mb-1'>Password</label>
            <input type="password" id='password' className='w-full h-12 p-4 outline-none bg-transparent border-[2px] border-gray-200/40 text-black rounded-md ' placeholder='Enter your password' value={password} onChange={handlePasswordChange} />
          </div>
          <div className='w-full h-auto flex items-center justify-between mb-5 '>
            <div className='flex items-center gap-x-2'>
              <input type="checkbox" id='remember' className='w-4 h-4 accent-gray-200 border-gray-200/20 rounded-md text-black' />
              <label htmlFor="remember" className='text text-black text-[0.875rem]'>Remember me</label>
            </div>
            <div className='w-auto h-auto '>
              <a href="#" className=' text-sm font-medium hover:underline ease-out duration-500 text-black hover:text-black'>Forgot Password</a>
            </div>
          </div>
          <div className='w-full h-auto flex items-center justify-center gap-x-1'>
            <p className='text-black text-sm font-medium'>
              Username: {username}
            </p>
            <p className='text-black text-sm font-medium'>
              Password: {password}
            </p>
          </div>
          <button className='w-full h-12 outline-none bg-white/70 rounded-md text-lg text-black font-medium mb-7'>
            Sign In
          </button>
          <div className='w-full h-auto flex items-center justify-center gap-x-1'>
            <p className='text-black text-sm font-medium'>
              Don't have an account?
            </p>
            <a href="#" className='text-black text-base font-medium hover:underline ease-out duration-500'>Create New Account</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;

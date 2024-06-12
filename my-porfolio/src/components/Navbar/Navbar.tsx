import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { Store } from '../../Store';


export const Navbar = () => {
  const {state: {userInfo}, dispatch} = useContext(Store)

  const signoutHandler = () => {
    // call dispatch with type USER_SIGNOUT
    dispatch({ type: 'USER_SIGNOUT' })
    // remove all data from localStorage
    localStorage.removeItem('userInfo')
    // redirect user to ...
    
  }

  return (
    <div className='absolute top-0 h-[70px] flex justify-between py-2 px-2 sm:px-4 w-[96%] bg-[#0a2731] rounded-lg mt-5 border-[#1a7492] border-2 items-center shadow-[1px_1px_10px_#1a7492]'>
      
      <Link to={'/'} className="text-center text-base sm:text-2xl md:text-3xl uppercase font-bold ">Bilan Mykhailo</Link>
      <div className="flex justify-between gap-x-4 sm:gap-x-8">
        {userInfo ? (

          <div className='flex gap-4 ml-4 justify-around sm:gap-8 items-center'>
            <span className=' text-xl font-semibold text-[#dddd6d]'>Hello{' '}{userInfo.name}!</span>
            <Link to={'#signout'} className='text-[#dddd6d] bg-[#03384a] text-base sm:text-xl md:text-2xl py-2 px-1 sm:px-3 md:px-5 border-[#0a2731] shadow-[1px_1px_10px_#1a7492] rounded-2xl text-center m-w-[100px] hover:text-[#03384a] hover:bg-[#dddd6d]' onClick={signoutHandler}>Sign Out</Link>
          </div>

        ) : (
          <>
          <Link to={'/signup'} className='text-[#dddd6d] bg-[#03384a] text-base sm:text-xl md:text-2xl py-2 px-1 sm:px-3 md:px-5 border-[#0a2731] shadow-[1px_1px_10px_#1a7492] rounded-2xl text-center m-w-[100px] hover:text-[#03384a] hover:bg-[#dddd6d]'>Sign Up</Link>
          <Link to={'/signin'} className='text-[#dddd6d] bg-[#03384a] text-base sm:text-xl md:text-2xl py-2 px-1 sm:px-3 md:px-5 border-[#0a2731] shadow-[1px_1px_10px_#1a7492] rounded-2xl text-center m-w-[100px] hover:text-[#03384a] hover:bg-[#dddd6d]'>Sign In</Link>
          </>
        )}
        
      </div>
      
    </div>
  )
}

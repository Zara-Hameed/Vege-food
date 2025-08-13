import React from 'react'
import { FiPhoneCall, FiSend } from "react-icons/fi";

const Header = () => {
  return (
    <div className='w-full bg-primary'>
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-start sm:justify-around gap-2 py-1 px-5 text-white text-sm text-left">
        
        <div className='flex items-center gap-2'>
          <span><FiPhoneCall /></span>+1235 2355 98
        </div>

        <div className='flex items-center gap-2'>
          <span><FiSend /></span>YOUREMAIL@EMAIL.COM
        </div>

        <div className='flex items-center gap-2'>
          3-5 Business days delivery & Free Returns
        </div>

      </div>
    </div>
  )
}

export default Header

import React from 'react'

const Newsletter = () => {
  return (
    <div className='flex flex-col text-center sm:text-left sm:flex-row md:text-left md:flex-row   gap-10 items-center justify-between px-10 py-10'  data-aos="fade-up">
        <div className='flex flex-col gap-2'  data-aos="fade-up">
            <h2 className='text-2xl'>Subcribe to our Newsletter</h2>
            <p className='text-sm text-gray-500'>Get e-mail updates about our latest shops and special offers</p>

        </div>
        <div>
            <input type="email" placeholder='Enter email address' className='border-none outline-none text-gray-600 text-sm' />
        </div>
        <div className='bg-primary p-3 outline-none border-none text-white text-sm'>Subscribe</div>
    </div>
  )
}

export default Newsletter
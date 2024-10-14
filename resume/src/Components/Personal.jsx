import React from 'react'

const Personal = () => {
  return (
    <div>
      <p className='text-3xl font-semibold text-gray-800 mb-6'>Personal Information</p>
      <div className='grid gap-6'>
        {/* Name */}
        <div className='grid gap-2'>
          <label className='text-lg font-medium text-gray-700' htmlFor='name'>Full Name</label>
          <input 
            type='text' 
            id='name' 
            placeholder='Enter Name' 
            className='bg-white text-black p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-300 focus:border-blue-500 transition duration-300'
          />
        </div>
        {/* Email */}
        <div className='grid gap-2'>
          <label className='text-lg font-medium text-gray-700' htmlFor='email'>Email</label>
          <input 
            type='email' 
            id='email' 
            placeholder='Enter Email' 
            className='bg-white text-black p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-300 focus:border-blue-500 transition duration-300'
          />
        </div>
        {/* Phone */}
        <div className='grid gap-2'>
          <label className='text-lg font-medium text-gray-700' htmlFor='phone'>Phone</label>
          <input 
            type='tel' 
            id='phone' 
            placeholder='Enter Phone Number' 
            className='bg-white text-black p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-300 focus:border-blue-500 transition duration-300'
          />
        </div>
        {/* Location */}
        <div className='grid gap-2'>
          <label className='text-lg font-medium text-gray-700' htmlFor='location'>Location</label>
          <input 
            type='text' 
            id='location' 
            placeholder='Enter Location' 
            className='bg-white text-black p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-300 focus:border-blue-500 transition duration-300'
          />
        </div>
        {/* Summary */}
        <div className='grid gap-2'>
          <label className='text-lg font-medium text-gray-700' htmlFor='summary'>Summary</label>
          <textarea 
            id='summary' 
            placeholder='Enter Summary' 
            className='bg-white text-black p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-300 focus:border-blue-500 h-28 resize-none transition duration-300'
          />
        </div>
      </div>
    </div>
  )
}

export default Personal

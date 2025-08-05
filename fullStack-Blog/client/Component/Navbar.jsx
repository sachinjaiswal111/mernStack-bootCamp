import React from 'react'

function Navbar() {
  return (
    <div className='bg-blue-400 flex justify-between p-3'>
        <div>
            <p className='text-4xl font-semibold'>BlogApp</p>
        </div>
        <div>
            <ul className='text-white text-xl flex items-center gap-2 cursor-pointer'>
                <li>myBlogs</li>
                <li>AboutUs</li>
                <li className=''>logout</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar

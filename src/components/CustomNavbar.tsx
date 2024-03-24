import React from 'react'
import Link from '../../node_modules/next/link'

export const CustomNavbar = () => {
  return (
    <div className='text-white bg-blue-600 h-12 py-2 px-3 flex justify-between items-center'>
      <div className='brand'><h1>
        <Link href='/'>Work Manager</Link></h1></div>
      <div>
        <ul className='flex space-x-3'>
          <li><Link href='/'>Home</Link></li>
          <li><Link href='/add-task'>Add Task</Link></li>
          <li><Link href='/show-tasks'>Show Tasks</Link></li>
        </ul>
      </div>
      <div>
        <ul className='flex space-x-2'>
          <li>Login</li>
          <li>Signup</li>
          </ul>
      </div>
    </div>
  )
}
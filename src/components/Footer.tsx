import React from 'react'

export const Footer = () => {
  return (
    <footer className='text-white h-40  bg-blue-900 mt-5'>
    <div className='flex p-5 justify-around'>
        <div className='text-center flex flex-col justify-center'>
            <h1 className='text-3xl'>Welcome to work manager</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        </div>
        <div className='text-center'>
            <h1>Important Links</h1>
            <ul>
                <li><a href="">Facebook</a></li>
                <li><a href="">Youtube</a></li>
                <li><a href="">Instagram</a></li>
            </ul>
        </div>
    </div>
    </footer>
  )
}

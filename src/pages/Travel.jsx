import React from 'react'
import { NavLink } from 'react-router-dom'

import video1 from '../video/video1.mp4'

import world from '../image/world.png'

const Travel = () => {
  return (
    <div className='container-fluid p-0 m-0'>
      <section className='first'>
        <div class="video-container">
          <video src={video1} autoPlay loop muted></video>
        </div>
      </section>

      <section className='second'>
        <div className='container-fluid text-white' id='header'>
          <div className='row'>
            <div className='col-4'>
              <div className='logo'>
                <img id="world" src={world} alt=''/><span>T</span>ravel to.
              </div>
            </div>
            <div className='col-6'>
              <ul className='d-flex float-right m-0'>
                <li className='nav'><NavLink to='/' id='nav1'>Home</NavLink></li>
                <li className='nav'><NavLink to='/about' id='nav2'>About</NavLink></li>
                <li className='nav'><NavLink to='/travel' id='nav3'>Travel</NavLink></li>
              </ul>
            </div>
            <div className='col-2'>
              <div className='m-2'>
                <button className='Login'><NavLink to='/login' className='text-white'>Login</NavLink></button>
                <button className='Register'><NavLink to='/register' className='text-white'>Register</NavLink></button>
              </div>
            </div>
          </div>
        </div>
        <hr className='divi m-0'/>
      </section>
    </div>
  )
}

export default Travel
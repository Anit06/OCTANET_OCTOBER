import React from 'react'
import '../css/Login.css'
import { NavLink } from 'react-router-dom'

import video1 from '../video/video1.mp4'

import world from '../image/world.png'
import userIcon from '../image/user.png'

const Register = () => {
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

      <section className='login_first'>
        <div className="login__container d-flex justify-content-center">
          <div className="login__form">
            <div className="user">
              <img src={userIcon} alt="" />
            </div>
            <h2>Register</h2>
            <div>
              <input type="text" placeholder='Username' id='username' required />
            </div>
            <div>
              <input type="email" placeholder='Email' id='email' required />
            </div>
            <div>
              <input type="password" placeholder='Password' id='password' required />
            </div>
              <button className='btn secondary__btn auth__btn' type='submit'>Create Account</button>
              <p>Already have an account? <NavLink to='/login' className='create'>Login</NavLink></p>
            </div>
        </div>
      </section>
  </div>
  )
}

export default Register
import React from 'react'
import '../css/About.css'
import { NavLink } from 'react-router-dom'

import video1 from '../video/video1.mp4'

import world from '../image/world.png'
import per01 from '../image/Person-1.jpg'
import per02 from '../image/Person-2.jpg'
import per03 from '../image/Person-3.jpg'
import per04 from '../image/Person-4.jpg'
import per05 from '../image/Person-5.jpg'
import per06 from '../image/Person-6.jpg'

const About = () => {
  return (
    <>
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

      <section className='About_first'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-3'>
              <div className='About_notice text-center'>
                <h3>Notice</h3>
                <hr className='divi m-0'/>
              </div>
            </div>
            <div className='col-9 d-flex justify-content-center flex-wrap'>
              <div className="per01 m-2"> 
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Minus sit, explicabo provident hic distinctio molestias voluptates nobis alias
                  placeat suscipt earum debitits recusandae voluptate illum expedita 
                  corrupti aliquid doloribus delectus?
                </p>
                <div className='Per'>
                  <img src={per01} className='img1 p-2' alt="" />
                  <div>
                    <h6 className='name'>John Doe</h6>
                    <p>Tour Guide</p>
                  </div>
                </div>
              </div>

              <div className="per02 m-2">
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Minus sit, explicabo provident hic distinctio molestias voluptates nobis alias
                    placeat suscipt earum debitits recusandae voluptate illum expedita 
                    corrupti aliquid doloribus delectus?
                </p>
                <div className='Per'>
                    <img src={per02} className='img2 p-2' alt="" />
                    <div>
                      <h6 className='name'>Devy Jones</h6>
                      <p>Tour Guide</p>
                    </div>
                </div> 
              </div>

            <div className="per03 m-2">
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Minus sit, explicabo provident hic distinctio molestias voluptates nobis alias
                  placeat suscipt earum debitits recusandae voluptate illum expedita 
                  corrupti aliquid doloribus delectus?
              </p>
              <div className='Per'>
                  <img src={per03} className='img3 p-2' alt="" />
                  <div>
                    <h6 className='name'>Lia Franklin</h6>
                    <p>Tour Guide</p>
                  </div>
              </div> 
            </div>

            <div className="per04 m-2">
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Minus sit, explicabo provident hic distinctio molestias voluptates nobis alias
                  placeat suscipt earum debitits recusandae voluptate illum expedita 
                  corrupti aliquid doloribus delectus?
              </p>
              <div className='Per'>
                  <img src={per04} className='img4 p-2' alt="" />
                  <div>
                    <h6 className='name'>Karls Marn</h6>
                    <p>Tour Guide</p>
                  </div>
              </div> 
            </div>

            <div className="per05 m-2">
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Minus sit, explicabo provident hic distinctio molestias voluptates nobis alias
                  placeat suscipt earum debitits recusandae voluptate illum expedita 
                  corrupti aliquid doloribus delectus?
              </p>
              <div className='Per'>
                  <img src={per05} className='img5 p-2' alt="" />
                  <div>
                    <h6 className='name p-2'>Robert Brown</h6>
                    <p>Tour Guide</p>
                  </div>
              </div> 
            </div>

            <div className="per06 m-2">
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Minus sit, explicabo provident hic distinctio molestias voluptates nobis alias
                  placeat suscipt earum debitits recusandae voluptate illum expedita 
                  corrupti aliquid doloribus delectus?
              </p>
              <div className='Per'>
                  <img src={per06} className='img6 p-2' alt="" />
                  <div>
                    <h6 className='name'>Peter dan</h6>
                    <p>Tour Guide</p>
                  </div>
              </div> 
            </div>

            </div>
          </div>
        </div>
      </section>
    </div>

    </>
  )
}

export default About
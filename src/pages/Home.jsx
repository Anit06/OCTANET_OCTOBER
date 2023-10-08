import React from 'react'
import '../css/Home.css'

import world from '../image/world.png'
import weather from '../image/weather.png'
import guide from '../image/guide.png'
import customization from '../image/customization.png'
import experience from '../image/experience.jpg'
import Travel1 from '../image/Travel1.jpg'
import Travel2 from '../image/Travel2.jpg'


import video1 from '../video/video1.mp4'
import video2 from '../video/video2.mp4'

import { RiMapPin2Line } from "react-icons/ri";
import { RiMapPinTimeLine } from "react-icons/ri";
import { RiGroupLine } from "react-icons/ri";
import { RiSearchLine } from "react-icons/ri";
import { NavLink } from 'react-router-dom'

const Home = () => {
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

        <section className='third'>
            <div className='container text-white p-0' id='main1'>
                <div className='row'>
                    <div className='col-6' id='content1'>
                        <div className="d-flex">
                            <h3>Know Before You Go</h3>
                            <img id="world1" src={world} alt=""></img>
                        </div>
                            <h1>Traveling opens the door to creating <span> memories</span></h1>
                            <p>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                Ullam ipsum nobis asperiores soluta voluptas quas voluptates.
                                Molestiae tempora dignissimos, animi praesentium molestias perferendis porro expedita delectus. Soluta natus porro.
                            </p>
                    </div>
                    <div className='col-2'>
                        <div className="Travel">
                            <img src={Travel1} alt="" />
                        </div>
                    </div>
                    <div className='col-2'>
                        <div className="Travel mt-3">
                            <video src={video2} alt="" autoPlay loop muted />
                        </div>
                    </div>
                    <div className='col-2'>
                        <div className="Travel mt-5">
                            <img src={Travel2} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className='forth'>
            <div className="container">
                <div className="search__bar">
                    <div className='searchform d-flex justify-content-center align-items-center'>
                        <div className='d-flex' id='search1'>
                            <span><RiMapPin2Line/></span>
                            <div className='padd'>
                                <h6>Location</h6>
                                <input type="text" placeholder='Where are you going?'/>
                            </div>
                        </div>
                        <div className='d-flex' id='search2'>
                            <span><RiMapPinTimeLine/></span>
                            <div className='padd'>
                                <h6>Distance</h6>
                                <input type="number" placeholder='Distance k/m'/>
                            </div>
                        </div>
                        <div className='d-flex' id='search3'>
                            <span><RiGroupLine/></span>
                            <div className='padd'>
                                <h6>Max People</h6>
                                <input type="number" placeholder='0'/>
                            </div>
                        </div>

                        <span className='search__icon' type='submit'>
                            <RiSearchLine className='RiSearchLine'/>
                        </span>

                    </div>
                </div>
            </div>

        </section>

        <section className='fifth'>
            <div className='container text-white p-0'>
                <div className='row'>
                    <div className='col-3 p-0'>
                        <h5 className="services_subtitle">What we serve</h5>
                        <h2 className="services_title">We offer our best services</h2>
                    </div>
                    <div className='col-3 p-0'>
                        <div className='servicebox'>
                            <div className='serviceimg'>
                                <img src={weather} alt=''></img>
                            </div>
                            <h4>Calculate Weather</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </div>
                    </div>
                    <div className='col-3 p-0'>
                        <div className='servicebox'>
                            <div className='serviceimg'>
                                <img src={guide} alt=''></img>
                            </div>
                            <h4>Best Tour Guide</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </div>
                    </div>
                    <div className='col-3 p-0'>
                        <div className='servicebox'>
                            <div className='serviceimg'>
                                <img src={customization} alt=''></img>
                            </div>
                            <h4>Customization</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className='sixth'>
            <div className='container p-0'>
                <div className='row'>
                    <div className='col-6 p-0'>
                        <div className="experience_content text-white">
                            <h4>Experience</h4>
                            <h3>With our all experience <br /> we will serve you</h3>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                            <br /> Quas aliquam, hic tempora inventore suscipit unde. </p>
                        </div>

                        <div className="counter_wrapper d-flex text-white">
                            <div className="counter_box">
                                <span>12k+</span>
                                <h6>Successful trip</h6>
                            </div>
                            <div className="counter_box">
                                <span>2k+</span>
                                <h6>Regular clients</h6>
                            </div>
                            <div className="counter_box">
                                <span>15</span>
                                <h6>Year experience</h6>
                            </div>
                        </div>
                    </div>
                    <div className='col-6'>
                        <div className='experience_img'>
                            <img src={experience} alt=''></img>
                        </div>
                    </div>
                </div>
            </div>
        </section>       
    </div>
  )
}

export default Home
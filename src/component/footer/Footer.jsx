import React from 'react'
import './Footer.css'

import maleTourist from '../../image/male-tourist.png'
import world from '../../image/world.png'

import { RiYoutubeFill } from "react-icons/ri";
import { RiFacebookCircleFill } from "react-icons/ri";
import { RiInstagramLine } from "react-icons/ri";
import { RiGithubFill } from "react-icons/ri";

import {RiMapPinLine} from "react-icons/ri";
import {RiMailFill} from "react-icons/ri";
import {RiPhoneFill} from "react-icons/ri"; 
import {RiCopyrightLine} from "react-icons/ri";

const Footer = () => {
  return (
    <div>
      <section className='newsletter'>
        <div className='container'>
          <div className='row'>
            <div className='col-6'>
              <div className="newsletter__content">
                <h2>Subcribe now to get useful traveling information</h2>
                <div className="newsletter__input">
                  <input type="email" placeholder='Enter your email' />
                  <button className="btn newsletter__btn">Subcribe</button>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Obcaecati adipisici sunt in, provident facere ipsam?
                </p>
              </div>
            </div>
            <div className='col-6'>
              <div className="newsletter__img">
                <img src={maleTourist} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='footer'>
        <div className='container p-0'>
          <div className='row'>
            <div className='col-3'>
              <div className="world_logo">
                <img src={world} alt="" /><span>T</span>ravel to.
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, enim.</p>
                <div className="social__link d-flex align-items-center">
                  <span>
                    <a href='https://www.youtube.com/'><RiYoutubeFill/></a>
                  </span>
                  <span>
                    <a href='https://github.com/'><RiGithubFill/></a>
                  </span>
                  <span>
                    <a href='https://www.facebook.com/'><RiFacebookCircleFill/></a>
                  </span>
                  <span>
                    <a href='https://www.instagram.com/'><RiInstagramLine/></a>
                  </span>
                </div>
              </div>
            </div>

            <div className='col-3' id='footer-box1'>
              <h5 className="footer__link-title">Discover</h5>
                <div className='footer__quick-links'>
                  <h6>Home</h6>
                  <h6>About</h6>
                  <h6>Travel</h6>
                </div>
            </div>

            <div className='col-3' id='footer-box2'>
              <h5 className="footer__link-title">Quick Links</h5>
                <div className='footer__quick-links'>
                  <h6>Gallery</h6>
                  <h6>Login</h6>
                  <h6>Register</h6>
                </div> 
            </div>

            <div className='col-3' id='footer-box3'>
              <h5 className="footer__link-title">Contact</h5>
                <div className='footer__quick-links'>
                  <div className='d-flex align-items-center'>
                      <h6 className='d-flex align-items-center'>
                        <span><RiMapPinLine/></span>
                        Address:
                      </h6>
                      <p>Kolaghat, West Bengal, India</p>
                  </div>

                  <div className='d-flex align-items-center'>
                      <h6 className='d-flex align-items-center'>
                        <span><RiMailFill/></span>
                        Email:
                      </h6>

                      <p>abc@gmail.com</p>
                  </div>

                  <div className='d-flex align-items-center'>
                      <h6 className='d-flex align-items-center'>
                        <span><RiPhoneFill/></span>
                        Phone:
                      </h6>

                      <p>+91 </p>
                  </div>
                </div>
            </div>
          </div>

          <div className='row'>
            <div className='container text-center p-2'>
              <p className='copyright'><RiCopyrightLine/>copyright2023, design and develop by .... All rights reserved. </p>
            </div>
          </div>
          </div>
      </section>
    </div>
  )
}

export default Footer
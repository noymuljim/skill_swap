import React from 'react';
import logo from '../assets/digital_tech_book_logo_design_template-removebg-preview.png'
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='bg-gradient-to-r from-[#08740a] to-[#048661] text-white p-10'>
      <footer className="flex flex-col justify-center items-center text-center md:flex-row md:justify-between  w-11/12 mx-auto">
        <aside>
          <img className='w-70 md:w-40' src={logo} alt="" />
          <p className='text-2xl font-semibold'>
            A Local Skill Exchange Platform
          </p>
        </aside>
        <nav className='flex flex-col text-center md:text-left'>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">UI/UX</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Web Dev</a>
        </nav>

        <nav className='flex flex-col text-center space-y-5 md:space-y-0 md:text-left'>
          <h6 className="footer-title">Visit Our Social </h6>
          <div className='flex items-center gap-4'>
            <FaFacebook />
            <a className="link link-hover">Facebook</a>
          </div>
          <div className='flex items-center gap-4'>
           <FaLinkedin></FaLinkedin>
            <a className="link link-hover">Linkedin</a>
          </div>
          <div className='flex items-center gap-4'>
            <FaInstagram></FaInstagram>
            <a className="link link-hover">Instagram</a>
          </div>
        </nav>
      </footer>
      <p className='flex text-center items-center justify-center pt-20'>© 2025 SkillSwap.  <br /> All rights reserved. Your privacy is protected and your data stays secure.</p>
    </div>
  );
};

export default Footer;
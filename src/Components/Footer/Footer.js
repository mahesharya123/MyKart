import React from 'react';
import './Footer.css';
import { NavLink } from 'react-router-dom';
import { Watch } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
        <NavLink exact to={'/'}> <Watch size={45} className="txt gray-800" />
        <span className="txt -xl font-bold">Y_Watch</span></NavLink>
        </div>
        <div className="footer-right">
          <a href="/about">About Us</a>
          <a href="/services">Services</a>
          <a href="/contact">Contact</a>
          <a href="/privacy">Privacy Policy</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} MyWebsite. All rights reserved.</p>
      </div>
    </footer>
  );
};

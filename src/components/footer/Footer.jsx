import React from 'react';
import { FaFacebook, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer p-10 bg-base-100 text-base-content">
            <nav className='text-center'>
                <div className="footer-title md:text-xl">Repair Ranger</div>
                <h6 className="footer-title">Social</h6>
                <div className="grid grid-flow-col gap-4">
                    <Link><FaFacebook className='text-3xl'></FaFacebook></Link>
                    <Link><FaLinkedin className='text-3xl'></FaLinkedin></Link>
                </div>
            </nav>
            <nav>
                <h6 className="footer-title">Services</h6>
                <a className="link link-hover">Branding</a>
                <a className="link link-hover">Support</a>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Advertisement</a>
            </nav>
            <nav>
                <h6 className="footer-title">Company</h6>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </nav>
        </footer>
    );
};

export default Footer;
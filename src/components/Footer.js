import React from 'react';
import "../css/footer.css";
import rca_logo from '../assets/rca-logo.png';

export default function Footer() {
    return (
        <div id="footer">
            <div className="footer-row">
                <div className="footer-col">
                    <img className="footer-logo" src={rca_logo} />
                    <div className="footer-rcaname">
                        <h1 className="footer-rca-name">Rajasthan Cultural Association</h1>
                        <h3 className="footer-rca-subname">IIT Kharagpur</h3>
                    </div>
                </div>

                <div className="footer-col">
                    <h2 className='footer-col-headings'>Contact Us<div className="underline-footer"><span></span></div>
                    </h2>
                    <a className="footer-contact-para" href="mailto:rca.iitkgp@gmail.com">
                        <i className="fa-regular fa fa-envelope"></i>rca.iitkgp@gmail.com
                    </a>
                    <a className="footer-contact-para" href="tel:+91-9635582222">
                        <i className="fa-regular fa fa-phone"></i> +91-9635582222
                    </a>
                    <i className="fa-regular fa fa-location-pin"></i>
                    <p className="footer-contact-para">IIT Kharagpur, Kharagpur</p>
                    <p className="footer-contact-para">West Bengal, India </p>
                </div>

                <div className="footer-col">
                    <h2 className="footer-col-headings">
                        Quick Links <div className="underline-footer"><span></span></div>
                    </h2>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Team</a></li>
                        <li><a href="#">Events</a></li>
                        <li><a href="#">Our Alumni</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>

                <div className="footer-col">
                    <h2 className="footer-col-headings">
                        Events <div className="underline-footer"><span></span></div>
                    </h2>
                    <ul>
                        <li><a href="#">Fresher's Welcome</a></li>
                        <li><a href="#">Cultural Night</a></li>
                        <li><a href="#">Kite Festival</a></li>
                        <li><a href="#">Sports Event</a></li>
                        <li><a href="#">Farewell and Trip</a></li>
                        <li><a href="#">Capture the Thrill</a></li>
                        <li><a href="#">Education Drive</a></li>
                    </ul>
                </div>
            </div>
            <hr className="footer-hr" />
            <div className="copyright-section-footer">
                <div className='copyright-footer-left'>
                    <p className="copyright-footer">Rajasthan Cultural Association © 2022 – All Rights Reserved</p>
                    <div className="privacy-policy">
                        <p className="conditions-footer">| <a href="https://restaurantbluepepper.com/terms-and-conditions/"
                            target="_blank">Terms and Conditions</a> |</p>
                        <p className="privacy-footer"><a href="https://loremipsum.io/privacy-policy/" target="_blank"> &nbsp;Privacy Policy</a> |
                        </p>
                    </div>
                </div>


                <div className="social-icons">
                    <a href="https://www.facebook.com/RCA.IITKGP" target="_blank"><i className="fa-brands fa fa-facebook" aria-hidden="true"></i></a>
                    <a href="https://www.youtube.com/@RCA.IITKGP"><i className="fa-brands fa fa-youtube-play"></i></a>
                    <a href="https://www.instagram.com/rca.iitkgp/" target="_blank"><i
                        className="fa-brands fa fa-instagram"></i></a>
                    <a href="https://www.linkedin.com/company/rca-iitkgp" target="_blank"><i
                        className="fa-brands fa fa-linkedin"></i></a>
                </div>

            </div>
            {/* <a id="arrow-top" href="#home">
            <div className="fas fa-arrow-up" id="arrow-top"></div>
        </a> */}
        </div>
    )
}

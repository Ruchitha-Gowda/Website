import React from 'react';
import './ContactUs.css';
import image from '../images/logo.png';

function ContactUs() {
  return (
    <div className="contact">
      <div className='contact-container'>
        <h1>CONTACT US</h1>
        <p className="tagline">CLOUDISIAN | YOUR IT CONSULTING & TRAINING PARTNER</p>
      </div>
      <div className="email-section">
        <p><strong>Email: </strong> shahid.khan@cloudisian.net / info@cloudisian.net</p>
        <p><strong>Website: </strong><a href="https://www.cloudisian.net" target="_blank" rel="noopener noreferrer">www.cloudisian.net</a></p>
      </div>
      <br />

      {/* Flex row for offices*/}
      <div className="address-section">
        <div className="row">
          <div className="col office-box">
            <h3>US Head Office</h3>
            <p>4640 Melody Dr Unit C</p>
            <p>Concord, California 94521</p>
            <p>United States</p>
            <p>📞 ‪+1 (415) 619 4657‬</p>
          </div>


          <div className=" col office-box">
            <h3>IN Branch Office</h3>
            <p>#299, 3rd floor, Amber,</p>
            <p>HBCS Layout, Vayalikaval, Nagawara,</p>
            <p>Bangalore - 560045</p>
            <p>📞 080 40108799 / ‪+91 7022280365‬</p>
          </div>
        </div>
      </div>

      <div className="logo-section">
        <img src={image} alt="Contact" className="contact-img" />
        <p className="slogan"></p>
      </div>
    </div>
  );
}

export default ContactUs;





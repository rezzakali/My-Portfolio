import React from 'react';
import MessengerCustomerChat from 'react-messenger-customer-chat';
import './Footer.css';

function Footer() {
  return (
    <div className="footer">
      <div className="row text-center">
        <ul>
          <li>
            <a href="https://www.facebook.com/rezzakali22" target="__blank">
              <box-icon type="logo" name="facebook-circle" id="icon" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/rezzak134" target="__blank">
              <box-icon name="instagram-alt" type="logo" id="icon" />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/rezzak-ali-18149a1ab"
              target="__blank"
            >
              <box-icon name="linkedin-square" type="logo" id="icon" />
            </a>
          </li>
        </ul>
        <MessengerCustomerChat
          pageId="108939578567658"
          appId="806504330361649"
        />
      </div>
    </div>
  );
}

export default Footer;

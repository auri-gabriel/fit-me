import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <div className='bg-primary py-13'>
      <div className='container bg-primary'>
        <div>
          <div className='d-flex flex-row justify-content-between'>
            <img
              style={{ height: '40px' }}
              src='/src/assets/logo.svg'
              alt='Logo'
            />
            <ul className='d-flex flex-row gap-5 list-unstyled'>
              <li>
                <Link className='text-white text-decoration-none' to='/about'>
                  About us
                </Link>
              </li>
              <li>
                <Link
                  className='text-white text-decoration-none'
                  to='/delivery'
                >
                  Delivery
                </Link>
              </li>
              <li>
                <Link className='text-white text-decoration-none' to='/help'>
                  Help & Support
                </Link>
              </li>
              <li>
                <Link className='text-white text-decoration-none' to='/terms'>
                  T&C
                </Link>
              </li>
            </ul>
            <div className='text-white'>
              Contact:
              <span className='number fw-bold'>+91&nbsp;1234567899</span>
            </div>
          </div>
          <div className='d-flex gap-3 justify-content-center'>
            <img src='/src/assets/facebook-icon.svg' alt='Facebook' />
            <img src='/src/assets/instagram-icon.svg' alt='Instagram' />
            <img src='/src/assets/twitter-icon.svg' alt='Twitter' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

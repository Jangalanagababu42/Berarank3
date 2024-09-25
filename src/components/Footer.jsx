// src/components/Footer.js
import React from 'react';
import telegram_logo from '../assets/telegram_logo.svg';
import github_logo from '../assets/github_logo.svg';
import twitter_logo from '../assets/twitter_logo.svg';
import LovdWhite from '../assets/LovdWhite_Logo.svg';

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="space-y-4">
          <h3 className="text-xl font-bold">Company</h3>
          <ul className="space-y-2">
            <li>
              <a href="#about" className="hover:text-blue-400">
                About us
              </a>
            </li>
            <li>
              <a href="#docs" className="hover:text-blue-400">
                Docs
              </a>
            </li>
          </ul>
        </div>
        <div className="space-y-4">
          <h3 className="text-xl font-bold">Social Networks</h3>
          <ul className="flex flex-row space-x-5">
            <li>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400"
              >
                <img src={twitter_logo} alt="twitter_logo" className='w-5 h-5' />
              </a>
            </li>
            <li>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400"
              >
                <img src={telegram_logo} alt="telegram_logo" className='w-5 h-5' />
              </a>
            </li>
            <li>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400"
              >
                <img src={github_logo} alt="github_logo" className='w-5 h-5' />
              </a>
            </li>
          </ul>
        </div>
        <div className="space-y-4 text-center md:text-right">
          <img
            src={LovdWhite}
            alt="Heart Logo"
            className="mx-auto md:mr-1 mb-2"
          />
          <p>&copy; LOvd Inc. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

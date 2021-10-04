import React from "react";
import { Link } from "react-router-dom";
import eventFlock from './assets/eventFlock.png'

const Header = () => {
  return (
    <div>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="logo">
            <Link to='/'><img src={eventFlock} alt="logo" /></Link>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <a className="mr-5 hover:text-gray-900">
              <Link to="/explore">Events</Link>
            </a>
            <a className="mr-5 hover:text-gray-900">
              <Link to="/community">Community</Link>
            </a>
            <a className="mr-5 hover:text-gray-900">
              <Link to="/contact">Contact Us</Link>
            </a>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;

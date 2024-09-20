import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <nav
      id="site-navigation"
      className="w-full bg-white sticky z-50 top-0  p-8"
    >
      <div className="flex justify-between items-center mt-3 -mb-3 w-full">
        {/* Logo text */}
        <div className="logo text-3xl font-semibold">
          <Link to="/">Elephant Techlabs</Link>
        </div>

        {/* Middle navigations */}
        <div className="nav-middle invisible lg:visible absolute lg:static flex justify-between items-center w-80">
          <div className="border-2 rounded-lg border-white transition ease-in-out delay-150 hover:border-red-500 hover:shadow-[5px_5px_0_0_rgb(99.6%,79.2%,79.2%)] duration-150">
            <div className="transition ease-in-out delay-150 px-3 py-2 text-center rounded-lg border-transparent hover:bg-red-200 hover:text-red-600 hover:rounded-lg duration-150">
              <a href="/#serviceSection" rel="home">
                Services
              </a>
            </div>
          </div>
          <div className="border-2 rounded-lg border-white transition ease-in-out delay-150 hover:border-red-500 hover:shadow-[5px_5px_0_0_rgb(99.6%,79.2%,79.2%)] duration-150">
            <div className="transition ease-in-out delay-150 px-3 py-2 text-center rounded-lg border-transparent hover:bg-red-200 hover:text-red-600 hover:rounded-lg duration-150">
              <Link to="/about">About</Link>
            </div>
          </div>
          <div className="border-2 rounded-lg border-white transition ease-in-out delay-150 hover:border-red-500 hover:shadow-[5px_5px_0_0_rgb(99.6%,79.2%,79.2%)] duration-150">
            <div className="transition ease-in-out delay-150 px-3 py-2 text-center rounded-lg border-transparent hover:bg-red-200 hover:text-red-600 hover:rounded-lg duration-150">
              <a href="/#contact" rel="home">
                Contact
              </a>
            </div>
          </div>
        </div>

        {/* Button with "Get a Quote" text */}
        <div className="cursor-pointer border-4 invisible lg:visible absolute lg:static rounded-lg border-white transition ease-in-out delay-150 hover:border-red-200 duration-150">
          <div className="get-quote-btn px-3 py-2 bg-[#303841] rounded-lg border-4 border-white text-white transition ease-in-out delay-150 text-center hover:bg-red-500 duration-150">
            <a href="/#contact" rel="home">
              Get a Quote
            </a>
          </div>
        </div>

        {/* Mobile menu toggle */}
        <button
          id="dropdownHoverButton"
          onClick={toggleDropdown}
          className="lg:hidden transition ease-in-out delay-150 px-3 py-2 text-center rounded-lg hover:bg-red-200 hover:text-red-600 hover:rounded-lg duration-150"
          type="button"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </div>

      {/* Dropdown menu */}
      <div
        id="dropdownHover"
        className={`z-10 mt-3 bg-white divide-y divide-gray-100 rounded-lg shadow mx-auto ${
          dropdownVisible ? "" : "hidden"
        }`}
      >
        <ul className="py-2 text-sm text-gray-700 flex flex-col justify-center items-center">
          <li>
            <div className="border-2 mt-3 w-44 rounded-lg border-white transition ease-in-out delay-150 hover:border-red-500 hover:shadow-[5px_5px_0_0_rgb(99.6%,79.2%,79.2%)] duration-150">
              <div className="transition ease-in-out delay-150 px-3 py-2 text-center rounded-lg border-transparent hover:bg-red-200 hover:text-red-600 hover:rounded-lg duration-150">
                <a href="/#serviceSection" rel="home">
                  Services
                </a>
              </div>
            </div>
          </li>
          <li>
            <div className="border-2 mt-3 w-44 rounded-lg border-white transition ease-in-out delay-150 hover:border-red-500 hover:shadow-[5px_5px_0_0_rgb(99.6%,79.2%,79.2%)] duration-150">
              <div className="transition ease-in-out delay-150 px-3 py-2 text-center rounded-lg border-transparent hover:bg-red-200 hover:text-red-600 hover:rounded-lg duration-150">
                <Link to="/about">About</Link>
              </div>
            </div>
          </li>
          <li>
            <div className="border-2 mt-3 w-44 rounded-lg border-white transition ease-in-out delay-150 hover:border-red-500 hover:shadow-[5px_5px_0_0_rgb(99.6%,79.2%,79.2%)] duration-150">
              <div className="transition ease-in-out delay-150 px-3 py-2 text-center rounded-lg border-transparent hover:bg-red-200 hover:text-red-600 hover:rounded-lg duration-150">
                <a href="/#contact" rel="home">
                  Contact
                </a>
              </div>
            </div>
          </li>
          <li>
            <div className="cursor-pointer border-4 w-44 mt-3 rounded-lg border-white transition ease-in-out delay-150 hover:border-red-200 duration-150">
              <div className="get-quote-btn px-3 py-2 bg-[#303841] rounded-lg border-4 border-white text-white transition ease-in-out delay-150 text-center hover:bg-red-500 duration-150">
                <a href="/#contact" rel="home">
                  Get a Quote
                </a>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;

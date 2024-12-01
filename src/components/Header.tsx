import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../subComponents/Button";
import DarkButton from "../subComponents/DarkButton";
import ell from "../assets/ell.png"

const Header = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <nav
      id="site-navigation"
      className="w-full bg-white sticky z-50 -top-10 pr-8 pl-8"
    >
      <div className="flex justify-between items-center -mt-3 -mb-3 w-full">
        {/* Logo text */}
        <div className="logo">
          <Link to="/"><div className="w-44">
            <img src={ell} alt="" />
          </div></Link>
        </div>

        {/* Middle navigations */}
        <div className="nav-middle invisible lg:visible absolute lg:static flex justify-between items-center w-80">
          <Button aTag={false} buttonText="About" toLink="/about"></Button>
          <Button
            aTag={false}
            buttonText="Serivces"
            toLink="/services"
          ></Button>
          <Button aTag={true} buttonText="Contact" toLink="/#contact"></Button>
        </div>

        {/* Button with "Get a Quote" text */}
        <DarkButton
          lgScreen={true}
          aTag={true}
          buttonText="Get A Quote"
          toLink="/#contact"
        ></DarkButton>

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
        className={`z-10 mt-3 bg-white divide-y divide-gray-100 rounded-lg lg:hidden border-b-2 mx-auto ${
          dropdownVisible ? "" : "hidden"
        }`}
      >
        <ul className="py-2 text-sm text-gray-700 flex flex-col justify-center items-center">
          <li className="my-2">
            <Button aTag={false} buttonText="About" toLink="/about"></Button>
          </li>
          <li className="my-2">
            <Button
              aTag={false}
              buttonText="Serivces"
              toLink={"/services"}
            ></Button>
          </li>
          <li className="my-2">
            <Button
              aTag={true}
              buttonText="Contact"
              toLink="/#contact"
            ></Button>
          </li>
          <li className="my-2">
            <DarkButton
              lgScreen={false}
              aTag={true}
              buttonText="Get A Quote"
              toLink="/#contact"
            ></DarkButton>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;

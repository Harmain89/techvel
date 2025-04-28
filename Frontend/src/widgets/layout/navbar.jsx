import React from "react";
import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";
import {
  Navbar as MTNavbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

export function Navbar({ brandName, routes, action }) {

  // console.log(brandName, action)
  const [openNav, setOpenNav] = React.useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [dropdownRef, setDropdownRef] = useState(null);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  React.useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef && !dropdownRef.contains(event.target)) {
        setServicesOpen(false);
      }
    }
    if (servicesOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [servicesOpen, dropdownRef]);

  const servicesDropdown = (
    <div
      className="absolute left-1/2 z-50 mt-2 w-[700px] -translate-x-1/2 rounded-lg bg-black py-6 shadow-2xl text-white text-left"
      onMouseLeave={() => setServicesOpen(false)}
    >
      <div className="flex px-8 gap-12">
        {/* IT Services & Development */}
        <div>
          <div className="font-bold text-white mb-3">IT Services & Development</div>
          <ul className="space-y-2">
            <li><a href="#" className="flex items-center gap-2 hover:text-blue-600"><span>🌐</span> Web Development</a></li>
            <li><a href="#" className="flex items-center gap-2 hover:text-blue-600"><span>💻</span> Software & App Development</a></li>
            <li><a href="#" className="flex items-center gap-2 hover:text-blue-600"><span>🎨</span> User Interface & User Experience</a></li>
            <li><a href="#" className="flex items-center gap-2 hover:text-blue-600"><span>☁️</span> SaaS</a></li>
            <li><a href="#" className="flex items-center gap-2 hover:text-blue-600"><span>🛒</span> E-Commerce </a></li>
            <li><a href="#" className="flex items-center gap-2 hover:text-blue-600"><span>🧪</span> Quality Assurance</a></li>
          </ul>
        </div>
        {/* Advance Technologies */}
        <div>
          <div className="font-bold text-white mb-3">Advance Technologies</div>
          <ul className="space-y-2">
            <li><a href="#" className="flex items-center gap-2 hover:text-blue-600"><span>🤖</span> Gen AI & Artificial Intelligence</a></li>
            <li><a href="#" className="flex items-center gap-2 hover:text-blue-600"><span>📡</span> Internet of Things</a></li>
          </ul>
        </div>
        {/* Rapid Contracts */}
        <div>
          <div className="font-bold text-white mb-3">Rapid Contracts</div>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-blue-600"><span>🚀</span> MVP Development</a></li>
            <li><a href="#" className="hover:text-blue-600"><span>🏢</span> Enterprise Solutions</a></li>
            <li><a href="#" className="hover:text-blue-600"><span>🔍</span> Tech Research </a></li>
          </ul>
        </div>
      </div>
    </div>
  );

  const navList = (
    <ul className="mb-10 mt-2 flex flex-col gap-2 text-inherit lg:mb-10 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      {routes.filter(({ name }) => name.toLowerCase() !== "contact").map(({ name, path, icon, href, target }) => {
        if (name.toLowerCase() === "services") {
          return (
            <div key={name} className="relative">
              <Typography
                as="li"
                variant="small"
                color="inherit"
                className="capitalize cursor-pointer"
                onMouseEnter={() => setServicesOpen(true)}
                onClick={() => setServicesOpen((open) => !open)}
              >
                <span className="flex items-center gap-1 p-1 font-bold hover:text-[#f92628] transition duration-200">{name}</span>
              </Typography>
              {servicesOpen && (
                <div ref={setDropdownRef}>{servicesDropdown}</div>
              )}
            </div>
          );
        }
        return (
          <Typography
            key={name}
            as="li"
            variant="small"
            color="inherit"
            className="capitalize"
          >
            {href ? (
              <a
                href={href}
                target={target}
                className="flex items-center gap-1 p-1 font-bold hover:text-[#f92628] transition duration-200"
              >
                {icon &&
                  React.createElement(icon, {
                    className: "w-[18px] h-[18px] opacity-75 mr-1",
                  })}
                {name}
              </a>
            ) : (
              <Link
                to={path}
                target={target}
                className="flex items-center gap-1 p-1 font-bold hover:text-[#f92628] transition duration-200"
              >
                {icon &&
                  React.createElement(icon, {
                    className: "w-[18px] h-[18px] opacity-75 mr-1",
                  })}
                {name}
              </Link>
            )}
          </Typography>
        );
      })}
    </ul>
  );

  return (
    <MTNavbar color="transparent" className="p-3">
      <div className="container mx-auto flex items-center justify-between text-white w-full">
        {/* Left: Logo and Brand Name */}
        <div className="flex items-center flex-1 min-w-0 -ml-6">
          <Link to="/" className="flex items-center gap-2 min-w-0">
            <img
              style={{ width: "44px", height: "44px" }}
              src="./img/logo-only.png"
              alt="Company Logo"
              className="w-11 h-11 mr-2 cursor-pointer"
            />
            <span className="text-white font-extrabold text-lg md:text-xl lg:text-2xl whitespace-nowrap leading-tight flex items-center" style={{letterSpacing: '0.5px'}}>
              Techvel Solutions
            </span>
          </Link>
        </div>
        {/* Center: Navigation Buttons */}
        <div className="hidden lg:flex flex-[2] justify-center items-center">
          <ul className="flex flex-row gap-6 items-center mb-0 mt-0">{navList.props.children}</ul>
        </div>
        {/* Right: Get Started Button */}
        <div className="hidden gap-2 lg:flex items-center justify-end flex-1">
          {React.isValidElement(action)
            ? React.cloneElement(action, {
                className: "hidden lg:inline-block",
              })
            : null}
        </div>
        <IconButton
          variant="text"
          size="sm"
          color="white"
          className="ml-auto text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon strokeWidth={2} className="h-6 w-6" />
          ) : (
            <Bars3Icon strokeWidth={2} className="h-6 w-6" />
          )}
        </IconButton>
      </div>
      <MobileNav
        className="fixed inset-0 z-50 bg-white px-4 pt-2 pb-4 text-blue-gray-900"
        open={openNav}
      >
        <div className="flex justify-between items-center mb-4">
          <span className="font-bold text-lg text-blue-gray-900">Techvel Solutions</span>
          <IconButton
            variant="text"
            size="sm"
            color="blue-gray"
            onClick={() => setOpenNav(false)}
          >
            <XMarkIcon strokeWidth={2} className="h-6 w-6" />
          </IconButton>
        </div>
        <hr className="mb-4 border-blue-gray-100" />
        <ul className="flex flex-col gap-2 mb-6">
          {routes.filter(({ name }) => name.toLowerCase() !== "contact").map(({ name, path, href, target }) => {
            if (name.toLowerCase() === "services") {
              return (
                <li key={name}>
                  <button
                    className="flex w-full items-center justify-between font-bold text-left py-3 px-2 rounded-lg hover:bg-blue-gray-50 transition"
                    onClick={() => setServicesOpen((open) => !open)}
                  >
                    <span>{name}</span>
                    <ChevronDownIcon
                      className={`h-5 w-5 ml-2 transition-transform ${servicesOpen ? "rotate-180" : "rotate-0"}`}
                    />
                  </button>
                  {servicesOpen && (
                    <div className="pl-6 pb-2">
                      <div className="font-bold text-blue-gray-900 mb-2 mt-2">IT Services & Development</div>
                      <ul className="mb-2">
                        <li><a href="#" className="block py-1 hover:text-[#f92628]" onClick={() => setServicesOpen(false)}>Web Development</a></li>
                        <li><a href="#" className="block py-1 hover:text-[#f92628]" onClick={() => setServicesOpen(false)}>Software & App Development</a></li>
                        <li><a href="#" className="block py-1 hover:text-[#f92628]" onClick={() => setServicesOpen(false)}>User Interface & User Experience</a></li>
                        <li><a href="#" className="block py-1 hover:text-[#f92628]" onClick={() => setServicesOpen(false)}>Quality Assurance</a></li>
                      </ul>
                      <div className="font-bold text-blue-gray-900 mb-2 mt-2">Advance Technologies</div>
                      <ul className="mb-2">
                        <li><a href="#" className="block py-1 hover:text-[#f92628]" onClick={() => setServicesOpen(false)}>LLM & Artificial Intelligence</a></li>
                        <li><a href="#" className="block py-1 hover:text-[#f92628]" onClick={() => setServicesOpen(false)}>Internet of Things</a></li>
                        <li><a href="#" className="block py-1 hover:text-[#f92628]" onClick={() => setServicesOpen(false)}>Game Development</a></li>
                      </ul>
                      <div className="font-bold text-blue-gray-900 mb-2 mt-2">Rapid Contracts</div>
                      <ul>
                        <li><a href="#" className="block py-1 hover:text-[#f92628]" onClick={() => setServicesOpen(false)}>MVP Development</a></li>
                        <li><a href="#" className="block py-1 hover:text-[#f92628]" onClick={() => setServicesOpen(false)}>Enterprise Product Development</a></li>
                        <li><a href="#" className="block py-1 hover:text-[#f92628]" onClick={() => setServicesOpen(false)}>Product Tech Research</a></li>
                      </ul>
                    </div>
                  )}
                </li>
              );
            }
            return (
              <li key={name}>
                {href ? (
                  <a
                    href={href}
                    target={target}
                    className="block font-bold py-3 px-2 rounded-lg hover:bg-blue-gray-50 transition"
                    onClick={() => setOpenNav(false)}
                  >
                    {name}
                  </a>
                ) : (
                  <Link
                    to={path}
                    target={target}
                    className="block font-bold py-3 px-2 rounded-lg hover:bg-blue-gray-50 transition"
                    onClick={() => setOpenNav(false)}
                  >
                    {name}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
        {React.isValidElement(action)
          ? React.cloneElement(action, {
              className: "w-full block mt-0",
              setOpenNav,
            })
          : <ContactNavButton setOpenNav={setOpenNav} className="w-full block mt-0" />}
      </MobileNav>
    </MTNavbar>
  );
}

Navbar.defaultProps = {
  brandName: "Techvel",
  action: null,
};

function ContactNavButton({ setOpenNav }) {
  const navigate = useNavigate();
  return (
    <a
      href="#"
      target="_self"
      onClick={e => {
        e.preventDefault();
        navigate('/contact');
        if (setOpenNav) setOpenNav(false);
      }}
    >
      <Button variant="gradient" size="sm" fullWidth className="border-2 border-white !important rounded-[10px]">
        Get Started?
      </Button>
    </a>
  );
}

Navbar.propTypes = {
  brandName: PropTypes.string.isRequired,
  routes: PropTypes.arrayOf(PropTypes.object).isRequired,
  action: PropTypes.node,
};

Navbar.displayName = "/src/widgets/layout/navbar.jsx";

export default Navbar;

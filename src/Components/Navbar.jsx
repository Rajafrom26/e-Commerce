import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const navLinkStyles = ({ isActive }) => {
    const base =
      "px-5 py-2 rounded-xl font-medium transition-all duration-300 flex items-center justify-center";

    const active = "bg-white text-blue-600 font-bold shadow-lg scale-105";
    const inactive = "text-white/90 hover:bg-white/10 hover:text-white";

    return `${base} ${isActive ? active : inactive}`;
  };

  return (
    <div className="w-full h-64 rounded-b-3xl border-b bg-[url(https://imagekit.io/blog/content/images/2019/12/image-optimization.jpg)] bg-no-repeat bg-cover bg-center overflow-hidden">
      
      <div className="w-full h-full bg-black/20 backdrop-brightness-75 flex items-start">
        <nav className="flex justify-between items-center w-full max-w-6xl mx-auto p-4 mt-20 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl">
          
          <Link to="/" className="font-black text-2xl bg-linear-to-r from-white to-blue-200 bg-clip-text text-transparent tracking-tight">
            MyWeb
          </Link>

          
          <div className="flex items-center space-x-8">
            <NavLink to="/" className={navLinkStyles}>
              Home
            </NavLink>

            <NavLink
              to={"/about"}
              className={navLinkStyles}
            >
              About
            </NavLink>

            <NavLink
              to="/contact"
              className={navLinkStyles}
            >
              Contact
            </NavLink>

            <NavLink to="/cart" className={navLinkStyles}>
              Cart
            </NavLink>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;

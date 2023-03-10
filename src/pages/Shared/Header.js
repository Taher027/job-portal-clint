import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((err) => {});
  };
  const menuItems = (
    <>
      <li>
        <Link to={"/home"}>Home</Link>
      </li>
      <li>
        <Link to={"/about"}>About</Link>
      </li>
      <li>
        <Link to={"/contact"}>contact</Link>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
        <Link to={"/home"} className="btn btn-ghost normal-case text-xl">
          Jobs Hack
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{menuItems}</ul>
      </div>
      <div className="navbar-end">
        {user?.uid ? (
          <>
            <Link onClick={handleLogOut} className="btn btn-sm bg-[#533483]">
              SignOut
            </Link>
            <Link to={"/home"}>
              <button className="btn btn-sm ml-2">Post A Job</button>
            </Link>
          </>
        ) : (
          <>
            <Link to={"/signin"} className="btn btn-sm bg-[#533483]">
              SignIn
            </Link>
            <Link to={"/signup"} className="btn btn-sm ml-2 bg-[#533483]">
              SignUP
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;

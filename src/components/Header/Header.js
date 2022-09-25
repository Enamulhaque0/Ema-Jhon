import React from "react";
import "./Header.css";
import logo from "../../images/Logo.svg";

const Header = () => {
  return (
    <div>
      <div className="navbar bg-base-100 header-container text-white ">
        <div className="container mx-auto">
          <div className="flex-1">
            <img src={logo} alt="" />
          </div>
          <div className="flex-none">
            <ul className="menu menu-horizontal p-0">
              <li>
                <a>Order</a>
              </li>
              <li>
                <a>Order Review</a>
              </li>
              <li>
                <a>Manage Inventory</a>
              </li>
              <li>
                <a>Login</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

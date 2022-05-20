import React from "react";
import "./Header.css";

import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { auth } from "../firebase";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth
        .signOut()
        .then((auth) => {
          console.log("Successfully signed out");
        })
        .catch((error) => {
          console.warn(error.message);
        });
    }
  };

  return (
    <div className="header">
      {/* Logo of header */}
      <Link to="/">
        <img
          className="header_logo"
          alt=""
          src="https://cdn.shopify.com/s/files/1/1250/3061/files/white-amazon-logo-png-6_1024x1024.png?v=1539106025"
        />
      </Link>

      {/* Search section: textbox and search button */}
      <div className="header_search">
        <input className="header_searchInput" type="text" />
        <SearchIcon className="header_searchIcon" />
      </div>

      {/* Header navigation: user icon, shop icon, and etc */}
      <div className="header_nav">
        <Link to={!user && "/login"}>
          <div onClick={handleAuthentication} className="header_option">
            <span className="header_option_lineOne">
              Hello {user ? "User" : "Guest"}
            </span>
            <span className="header_option_lineTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
        <div className="header_option">
          <span className="header_option_lineOne">Returns</span>
          <span className="header_option_lineTwo">& Order</span>
        </div>
        <div className="header_option">
          <span className="header_option_lineOne">Your</span>
          <span className="header_option_lineTwo">Prime</span>
        </div>

        <Link to="/checkout">
          <div className="header_optionBasket">
            <ShoppingBasketIcon />
            <span className="header_optionLine header_basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;

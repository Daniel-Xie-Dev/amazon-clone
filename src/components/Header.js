import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      {/* Logo of header */}
      <img
        className="header_logo"
        alt=""
        src="https://cdn.shopify.com/s/files/1/1250/3061/files/white-amazon-logo-png-6_1024x1024.png?v=1539106025"
      />

      {/* Search section: textbox and search button */}
      <div className="header_search">
        <input className="header_searchInput" type="text" />
        {/* Logo */}
      </div>

      {/* Header navigation: user icon, shop icon, and etc */}
      <div className="header_nav">
        <div className="header_option">
          <span className="header_option_lineOne">Hello Guest</span>
          <span className="header_option_lineTwo">Sign In</span>
        </div>
        <div className="header_option">
          <span className="header_option_lineOne">Returns</span>
          <span className="header_option_lineTwo">& Order</span>
        </div>
        <div className="header_option">
          <span className="header_option_lineOne">Your</span>
          <span className="header_option_lineTwo">Prime</span>
        </div>

        {/* <div className="header_option">Basket</div> */}
      </div>
    </div>
  );
}

export default Header;

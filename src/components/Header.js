import React from 'react';
import '../css/header.css'

function Header() {
  return (
    <div id="header">
      <div id="logo"><a href="google.com">Logo</a></div>

      <div className="delivery-address">
        <form className="" action="index.html" method="post">
          <i className="fas fa-map-marker-alt" />
          <input type="text" name="" placeholder="Адрес доставки" />
        </form>
      </div>

      <div className="log-in"><i className="fas fa-user-alt"></i></div>
      <div className="basket-button"><i className="fas fa-shopping-basket"></i></div>
    </div>
  )
}

export default Header;
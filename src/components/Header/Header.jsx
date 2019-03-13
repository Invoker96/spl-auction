import React from "react";
import { config } from '../../utils/config/config'
import live from '../../images/live-logo.gif';
import './Header.css';

function Header(props) {
  return (
    <div className="App">
      <header className="App-header">
        <div className="App-title">{ config.AUCTION.TITLE }</div>
        <img src={live} className="App-live" alt="live-logo"/>
      </header>
    </div>
  );
}
export default Header;

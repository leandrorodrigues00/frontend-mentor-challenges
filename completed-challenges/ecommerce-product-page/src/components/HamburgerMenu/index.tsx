import { slide as Menu } from "react-burger-menu";
import "./styles.css";

import logo from "../../assets/logo.svg";

export function HamburgerMenu() {
  return (
    <div className="outer-container burger-wrapper">
      <a className="logo-mobile" href="#">
        <img src={logo} alt="" />
      </a>
      <Menu>
        <a id="home" className="menu-item" href="#">
          Collections
        </a>
        <a id="men" className="menu-item" href="#">
          Men
        </a>
        <a id="women" className="menu-item" href="#">
          Women
        </a>

        <a id="about" className="menu-item" href="#">
          About
        </a>
        <a id="contact" className="menu-item" href="#">
          Contact
        </a>
      </Menu>
    </div>
  );
}

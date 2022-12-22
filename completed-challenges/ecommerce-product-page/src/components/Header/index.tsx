import { ShoppingCart } from "phosphor-react";
import { useTheme } from "styled-components";
import logo from "../../assets/logo.svg";
import * as Popover from "@radix-ui/react-popover";
import { HeaderContainer, HeaderNavigation, HeaderProfileInfo } from "./styles";
import { CartPopover } from "../CartPopover";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { HamburgerMenu } from "../HamburgerMenu";

import nyan from "../../assets/nyantocat.gif";

export function Header() {
  const colors = useTheme();

  const { cartItems } = useContext(CartContext);

  return (
    <HeaderContainer>
      <HamburgerMenu />

      <HeaderNavigation>
        <a href="#">
          <img src={logo} alt="link to home screen" />
        </a>
        <ul>
          <li>
            <a href="#">Collections</a>
          </li>
          <li>
            <a href="#">Men</a>
          </li>
          <li>
            <a href="#">Women</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </HeaderNavigation>

      <HeaderProfileInfo>
        <Popover.Root>
          <Popover.Trigger asChild>
            <button title="shopping cart button">
              <ShoppingCart size={27} color={colors["Dark-grayish-blue"]} />

              {cartItems > 0 ? <span>{cartItems}</span> : ""}
            </button>
          </Popover.Trigger>
          <CartPopover />
        </Popover.Root>

        <div>
          <a href="https://github.com/leandrorodrigues00">
            <img src={nyan} alt="link to github" />
          </a>
        </div>
      </HeaderProfileInfo>
    </HeaderContainer>
  );
}

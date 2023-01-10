import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import {
  HeaderContainer,
  MenuCloseButton,
  MenuMobile,
  MenuMobileContent,
  NavContainer,
} from "./styles";
import logo from "../../assets/logo.svg";

import * as Dialog from "@radix-ui/react-dialog";
import { X } from "phosphor-react";

export function Header() {
  const router = useRouter();
  return (
    <HeaderContainer>
      <Link href="/" title="link to start">
        <Image width={48} height={48} src={logo} alt="" />
      </Link>

      <NavContainer>
        <ul>
          <li className={router.pathname == "/" ? "active" : ""}>
            <Link href="/">
              <span>00</span> Home
            </Link>
          </li>

          <li className={router.pathname == "/destination" ? "active" : ""}>
            <Link href="/destination">
              <span>01</span> Destination
            </Link>
          </li>

          <li className={router.pathname == "/crew" ? "active" : ""}>
            <Link href="/crew">
              <span>02</span> crew
            </Link>
          </li>

          <li className={router.pathname == "/technology" ? "active" : ""}>
            <Link href="/technology">
              <span>03</span> Technology
            </Link>
          </li>
        </ul>
      </NavContainer>

      <Dialog.Root>
        <Dialog.Trigger asChild>
          <MenuMobile>
            <span></span>
            <span></span>
            <span></span>
          </MenuMobile>
        </Dialog.Trigger>
        <Dialog.Portal>
          <MenuMobileContent>
            <MenuCloseButton>
              <X size={24} weight="bold" />
            </MenuCloseButton>

            <ul>
              <li>
                <Link href="/">
                  <span>00</span> Home
                </Link>
              </li>

              <li>
                <Link href="/destination">
                  <span>01</span> Destination
                </Link>
              </li>

              <li>
                <Link href="/crew">
                  <span>02</span> crew
                </Link>
              </li>

              <li>
                <Link href="/technology">
                  <span>03</span> Technology
                </Link>
              </li>
            </ul>
          </MenuMobileContent>
        </Dialog.Portal>
      </Dialog.Root>
    </HeaderContainer>
  );
}

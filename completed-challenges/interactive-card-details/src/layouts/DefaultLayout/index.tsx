import { Outlet } from "react-router-dom";
import { Aside } from "../../components/Aside";
import { LayoutContainer } from "./style";

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <Aside />
      <Outlet />
    </LayoutContainer>
  );
}

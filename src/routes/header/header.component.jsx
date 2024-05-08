import HeaderContainer from "./header.styles";
import NavBar from "../../components/navbar/navbar.component";

import { Outlet } from "react-router-dom";
import { Fragment } from "react";

const Header = () => (
  <>
    <HeaderContainer>
      <NavBar />
    </HeaderContainer>
    <Outlet />
  </>
);

export default Header;

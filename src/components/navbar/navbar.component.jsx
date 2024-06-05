import NavList from "../nav-list/nav_list.component";
import NavBarContainer from "./navbar.styles";
import Logo from "../logo/logo.component";
import SignButton from "../sign-button/sign_button.component";

const NavBar = () => {
  return (
    <NavBarContainer>
      <Logo />
      <NavList />
    </NavBarContainer>
  );
};

export default NavBar;

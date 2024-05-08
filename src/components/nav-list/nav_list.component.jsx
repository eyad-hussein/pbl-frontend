import NavItem from "../nav-item/nav_item.component";
import NavListContainer from "./nav_list.styles";

const NavList = () => {
  return (
    <NavListContainer>
      <NavItem content='Home' />
      <NavItem content='Product' />
      <NavItem content='Tutorial' />
      <NavItem content='Support' />
    </NavListContainer>
  );
};

export default NavList;

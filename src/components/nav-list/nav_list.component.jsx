import NavItem from "../nav-item/nav_item.component";
import NavListContainer from "./nav_list.styles";

const NavList = () => {
  return (
    <NavListContainer>
      <NavItem link='/' content='Home' />
      <NavItem link='/' content='Product' />
      <NavItem link='/' content='Tutorial' />
      <NavItem link='/' content='Support' />
    </NavListContainer>
  );
};

export default NavList;

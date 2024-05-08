import NavItemContainer from "./nav_item.styles";
import NavLink from "../nav-link/nav_link.component";

const NavItem = ({ content }) => (
  <NavItemContainer>
    <NavLink content={content} />
  </NavItemContainer>
);

export default NavItem;

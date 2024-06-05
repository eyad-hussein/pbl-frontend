import NavItemContainer from "./nav_item.styles";
import NavLink from "../nav-link/nav_link.component";

const NavItem = ({ content, link }) => (
  <NavItemContainer>
    <NavLink link={link} content={content} />
  </NavItemContainer>
);

export default NavItem;

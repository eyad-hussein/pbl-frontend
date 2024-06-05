import NavLinkContainer from "./nav_link.styles";

const NavLink = ({ content, link }) => (
  <NavLinkContainer href={link}>{content}</NavLinkContainer>
);

export default NavLink;

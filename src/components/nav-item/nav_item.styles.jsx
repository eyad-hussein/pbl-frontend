import styled from "styled-components";

const NavItemContainer = styled.li`
  display: inline-block;
  color: white;
  font-family: "Marvel", sans-serif;
  font-size: 3rem;
  &:not(:last-child) {
    margin-right: 3.5rem;
  }
`;

export default NavItemContainer;

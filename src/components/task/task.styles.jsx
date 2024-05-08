import { Link } from "react-router-dom";
import styled from "styled-components";

const TaskContainer = styled(Link)`
  display: flex;
  flex-direction: column;
  background: #5d5d7c;
  border: 1px solid white;
  border-radius: 40px;
  width: 23%;
  padding: 4rem 1rem;
  cursor: pointer;

  &:link,
  &:visited {
    color: currentColor;
    text-decoration: none;
  }

  .images {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    &__image {
      max-width: 35%;
      border-radius: 50%;
      border: 1px solid white;
    }

    .arrow {
      max-width: 30%;
      max-width: auto;
    }
  }

  h2 {
    margin-top: 2rem;
    font-family: "Londrina Solid";
    font-size: 3rem;
    font-weight: 400;
  }

  p {
    font-family: Lustria, sans-serif;
    margin-top: 0.5rem;
    font-size: 1.5rem;
  }
`;

export default TaskContainer;

import styled from "styled-components";

const TaskExtendedContaner = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 50%;

  .images {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 100%;

    &__image {
      max-width: 30%;
      border-radius: 50%;
      border: 1px solid white;
    }

    .arrow {
      max-width: 30%;
      max-width: auto;
    }
  }

  h1 {
    margin: 4rem 0;
    font-family: "Londrina Solid";
    font-size: 8rem;
    font-weight: 400;
    text-align: center;
  }
`;

export default TaskExtendedContaner;

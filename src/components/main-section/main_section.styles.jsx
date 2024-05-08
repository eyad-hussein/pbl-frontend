import styled from "styled-components";

const MainSectionContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 5% 20%;
  text-align: center;
  color: white;

  h1 {
    font-family: "Londrina Solid", sans-serif;
    font-weight: 400;
    font-size: 5rem;
    margin-bottom: 2rem;
  }

  .purple {
    color: #7d60fb;
  }

  .second-part {
    display: block;
  }

  .main-section-details {
    margin-bottom: 2rem;
    font-family: Livvic, sans-serif;
    font-size: 2rem;
  }
`;

export default MainSectionContainer;

import styled from "styled-components";

const DownloadButtonContainer = styled.a`
  display: flex;
  position: relative;
  align-items: center;
  width: 100%;
  background: #7d60fb;
  border-radius: 50px;
  border: 0;
  padding: 1rem 3rem;
  cursor: pointer;

  img {
    height: 10rem;
  }

  &:link,
  &:visited {
    text-decoration: none;
  }

  .download-details {
    color: white;
    font-weight: 400;
    font-family: "Lilita One", sans-serif;
    font-size: 5rem;
  }
`;

export default DownloadButtonContainer;

import { Link } from "react-router-dom";
import styled from "styled-components";

const UploadButtonContainer = styled.label`
  display: flex;
  justify-content: center;
  position: relative;
  align-items: center;
  width: 100%;
  background: #7d60fb;
  border-radius: 50px;
  border: 0;
  padding: 1rem 0.5rem;
  color: white;
  cursor: pointer;

  &:link,
  &:visited {
    text-decoration: none;
    color: currentColor;
  }

  img {
    height: 100%;
    margin-right: 2rem;
  }

  input {
    display: none;
  }

  .upload-details {
    font-family: "Lilita One", sans-serif;
    font-size: 3.5rem;
  }
`;
export default UploadButtonContainer;

import DownloadButton from "../download-button/download_button.component";
import DownloadImageContainer from "./download_image.styles";

const DownloadImage = ({ path }) => (
  <DownloadImageContainer>
    <h1>Image is done</h1>

    <DownloadButton path={path} />
  </DownloadImageContainer>
);
export default DownloadImage;

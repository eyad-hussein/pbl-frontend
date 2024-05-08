import DownloadButtonContainer from "./download_button.styles";
import pointer from "../../assets/icons/pointer.png";

const DownloadButton = ({ path }) => {
  return (
    <DownloadButtonContainer href={"img.png"} download>
      <img src={pointer} alt='pointer' />
      <p className='download-details'>Download from Here</p>
    </DownloadButtonContainer>
  );
};

export default DownloadButton;

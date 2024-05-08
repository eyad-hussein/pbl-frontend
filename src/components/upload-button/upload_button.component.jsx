import UploadButtonContainer from "./upload_button.styles";
import uploadIcon from "../../assets/icons/upload.png";

const UploadButton = () => (
  <UploadButtonContainer type='submit'>
    <img src={uploadIcon} alt='upload' />
    <p className='upload-details'>Upload Image Here</p>
  </UploadButtonContainer>
);

export default UploadButton;

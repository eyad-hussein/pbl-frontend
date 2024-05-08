import { useSearchParams } from "react-router-dom";
import DownloadImage from "../../components/download-image/download_image.component";
import DownloadContainer from "./download.styles";

const Download = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const path = searchParams.get("path");

  return (
    <DownloadContainer>
      <DownloadImage path={path} />
    </DownloadContainer>
  );
};

export default Download;

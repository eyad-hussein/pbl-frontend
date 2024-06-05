import { useSearchParams } from "react-router-dom";
import DownloadImage from "../../components/download-image/download_image.component";
import DownloadContainer from "./download.styles";
import Error from "../../components/utils/error/error.component";

const Download = () => {
  const [searchParams] = useSearchParams();
  const path = searchParams.get("path");

  // Additional logging
  console.log("searchParams:", searchParams);
  console.log("path:", path);

  // Check if path is null, undefined, empty string, or the string "undefined"
  return (
    <div>
      {!path || path === "undefined" ? (
        <Error />
      ) : (
        <DownloadContainer>
          <DownloadImage path={path} />
        </DownloadContainer>
      )}
    </div>
  );
};

export default Download;

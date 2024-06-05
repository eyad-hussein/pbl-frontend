import UploadButton from "../upload-button/upload_button.component";
import TaskExtendedContaner from "./task_extended.styles";
import arrowIcon from "../../assets/icons/right-arrow-big.png";
import uploadIcon from "../../assets/icons/upload.png";

import UploadButtonContainer from "../upload-button/upload_button.styles";
import React, { useState, useEffect } from "react";
import taskController from "../../controllers/task.controller";
import { useNavigate } from "react-router-dom";
import { Buffer } from "buffer";
import Loading from "../utils/loading/loading.component";
import Error from "../utils/error/error.component";

const TaskExtended = ({ task }) => {
  const { images, title, to } = task;
  const { oldImage, newImage } = images;

  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const [downloadPath, setDownloadPath] = useState(null);

  useEffect(() => {
    redirectToAnotherRoute();
  }, [downloadPath]);

  const handleFileUpload = async (e) => {
    try {
      setIsLoading(true);
      const file = e.target.files[0];
      const data = await taskController.generatePicture(file, to);

      setDownloadPath(data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setIsError(true);
    }
  };

  const redirectToAnotherRoute = () => {
    if (downloadPath !== null) {
      console.log("redirectToAnotherRoute");
      navigate(`/download?path=${encodeURIComponent(downloadPath)}`);
    }
  };

  return (
    <TaskExtendedContaner>
      <div className='images'>
        <img className='images images__image' src={oldImage} alt='old image' />
        <img className='arrow' src={arrowIcon} alt='arrow' />
        <img className='images images__image' src={newImage} alt='old image' />
      </div>
      <h1>{title}</h1>

      <UploadButtonContainer>
        <input type='file' onChange={handleFileUpload} />
        <img src={uploadIcon} alt='upload' />
        <p className='upload-details'>Upload Image Here</p>
      </UploadButtonContainer>

      {isLoading && <Loading />}
      {isError && <Error />}
    </TaskExtendedContaner>
  );
};

export default TaskExtended;

import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000/api/",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

const generatePicture = async (file, task) => {
  const formData = new FormData();
  formData.append("image", file);

  try {
    const response = await api.post(
      `http://localhost:8000/api/${task}`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    console.log(response);

    return response.data;
  } catch (error) {
    console.error("Error uploading file:", error);
  }
};

export default {
  generatePicture,
};

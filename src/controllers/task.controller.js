import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000/api/",
  headers: {
    "Content-Type": "multipart/form-data",
    Accept: "*/*",
    "Accept-Encoding": "gzip, deflate, br",
    Connection: "keep-alive",
  },
  withCredentials: true,
});

const generatePicture = async (file, task) => {
  const formData = new FormData();
  formData.append("image", file);

  console.log(`formdata ${formData}`);
  try {
    const reponse = await api.post(`${task}`, formData);
    const data = reponse.data;
    console.log(`data ${data}`);
    return data["processed_image"];
  } catch (e) {
    console.log(e);
  }
};

export default {
  generatePicture,
};

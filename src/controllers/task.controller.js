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
  await api
    .post(`${task}`, formData)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
};

export default {
  generatePicture,
};

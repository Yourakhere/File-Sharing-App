import axios from 'axios';

const API_BASE_URL = 'https://youakher-file-sharing-app.onrender.com';  

export const UploadFile = async (data) => {
  try {
    let response = await axios.post(`${API_BASE_URL}/upload`, data);
    return response.data;
  } catch (error) {
    console.error("error in uploading file", error.message);
    throw error;
  }
};


 

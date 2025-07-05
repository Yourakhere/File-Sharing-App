import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000';  

export const UploadFile = async (data) => {
  try {
    let response = await axios.post(`${API_BASE_URL}/upload`, data);
    return response.data;
  } catch (error) {
    console.error("error in uploading file", error.message);
    throw error;
  }
};


 
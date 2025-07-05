import multer from 'multer';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import cloudinary from '../utils/cloudinary.js';
  
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'file-sharing',
    resource_type: 'auto'
  }
});

const upload = multer({ storage: storage });

export default upload;

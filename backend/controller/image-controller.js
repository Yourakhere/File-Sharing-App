import File from '../models/file.js';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';

dotenv.config();

 
export const uploadImage = async (req, res) => {
  try {
    const fileUrl = req.file.path;         
    const originalName = req.file.originalname;  
    const publicId = req.file.filename;     

    const fileObj = {
      path: fileUrl,
      name: originalName,
      public_id: publicId
    };

    const file = await File.create(fileObj);

    res.status(200).json({ path: fileUrl });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: error.message });
  }
};
 
export const getImage = async (request, response) => {
    try {   
        const file = await File.findById(request.params.fileId);
        
        file.downloadCount++;

        await file.save();

        response.download(file.path, file.name);
    } catch (error) {
        console.error(error.message);
        response.status(500).json({ msg: error.message });
    }
}

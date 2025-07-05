import cron from 'node-cron';
import File from '../models/file.js';
import cloudinary from '../utils/cloudinary.js';

cron.schedule('0 * * * *', async () => {
  const expiry = new Date(Date.now() - 24 * 60 * 60 * 1000);
  const expiredFiles = await File.find({ createdAt: { $lt: expiry } });

  for (const file of expiredFiles) {
    await cloudinary.uploader.destroy(file.public_id);
    await File.deleteOne({ _id: file._id });
  }
});

import mongoose from "mongoose";

const FileSchema = new mongoose.Schema({
  path: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  public_id: {
    type: String,
    required: true
  },
  downloadCount: {
    type: Number,
    default: 0
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const File = mongoose.model('File', FileSchema);

export default File;

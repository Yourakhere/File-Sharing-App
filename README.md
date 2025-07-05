# 📁 File Sharing App

A simple file sharing web app built with **React**, **Node.js**, **Express**, **MongoDB**, and **Cloudinary**.

Users can:
- Upload files
- Get a unique download link
- Download files
- See all their uploaded links for the last 24 hours (stored in localStorage)

---

## 🚀 Features

- File upload with Cloudinary storage
- Link generation with download count
- Auto-expiry of links after 24 hours (in localStorage)
- Clean responsive UI

---

## ⚙️ Tech Stack

- Frontend: React
- Backend: Node.js, Express
- Database: MongoDB Atlas
- File Storage: Cloudinary
- Local file tracking: `localStorage`
- Scheduled cleanup: `node-cron` (optional)

---

## 🗂️ Project Structure


---

## 📦 Environment Variables

Create a `.env` file **in your root backend folder** with:

```env
PORT=5000

# MongoDB Atlas connection string
MONGO_URL=your_mongodb_connection_string

# Cloudinary credentials
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
cd backend
npm install
npm start
cd frontend
npm install
npm run dev  # For frontend
# or
npm start    # For backend

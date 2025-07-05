import { useState, useRef, useEffect } from 'react';
import './App.css';
import { UploadFile } from './services/api.js';

function App() {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState('');
  const [savedLinks, setSavedLinks] = useState([]);

  const fileInputRef = useRef();

  // Load saved links on mount
  useEffect(() => {
    const uploads = JSON.parse(localStorage.getItem('uploads') || '[]');
    setSavedLinks(uploads);
  }, []);

  // Handle upload
  useEffect(() => {
    const getImage = async () => {
      if (file) {
        const data = new FormData();
        data.append('file', file);
        data.append("name", file.name);

        try {
          let response = await UploadFile(data);
          if (response && response.path) {
            setResult(response.path);
          } else {
            console.error("Upload response did not contain a path:", response);
            setResult("Error: Could not get file link.");
          }
        } catch (error) {
          console.error("Error during file upload:", error);
          setResult("Error: Failed to upload file.");
        }
      }
    };
    getImage();
  }, [file]);

  // Save new result to localStorage and state
  useEffect(() => {
    if (result && !result.startsWith("Error")) {
      const now = Date.now();
      const newLink = { url: result, timestamp: now };
      let uploads = JSON.parse(localStorage.getItem('uploads') || '[]');
      uploads.push(newLink);

      // Keep only links from last 24 hours
      uploads = uploads.filter(link => now - link.timestamp < 24 * 60 * 60 * 1000);
      localStorage.setItem('uploads', JSON.stringify(uploads));

      // Update state too
      setSavedLinks(uploads);
    }
  }, [result]);

  const onUploadClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className='container'>
      <div className="wrapper">
        <h1 className="app-title">File Sharing App</h1>
        <p className="app-description">Welcome to the file sharing application!</p>
        <p className="app-instruction">Click the button below to upload your files.</p>

        <button className="upload-button" onClick={onUploadClick}>Upload</button>

        <input
          type="file"
          ref={fileInputRef}
          style={{ display: 'none' }}
          onChange={(e) => setFile(e.target.files[0])}
        />

        {result && (
          <div className="result-container">
            <p className="result-label">Your shareable link:</p>
            <a href={result} target="_blank" rel="noopener noreferrer" className="result-link">
              {result}
            </a>
          </div>
        )}

       <div className="footer">
  <p className="footer-text">
    © 2025 File Sharing App by{' '}
    <a 
      href="https://yourakhere.vercel.app/" 
      className="footer-link"
      target="_blank" 
      rel="noopener noreferrer"
    >
      Yourakhere
    </a>
  </p>
</div>


        {savedLinks.length > 0 && (
          <div className="uploads-list">
            <h2>Uploaded Files (Last 24 Hours):</h2>
            <ul>
              {savedLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.url} target="_blank" rel="noopener noreferrer">
                    {link.url}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;

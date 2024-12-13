import React, { useState } from "react";
import styles from './ModelUploadPage.module.scss'; // Import the SCSS module

const ModelUploadPage = () => {
  // State to manage form data and progress
  const [ipAddress, setIpAddress] = useState("");
  const [port, setPort] = useState("");
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);

  // Handle input changes
  const handleIpChange = (e) => setIpAddress(e.target.value);
  const handlePortChange = (e) => setPort(e.target.value);

  // Handle file upload selection
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  // Simulate file upload
  const handleUpload = () => {
    if (!ipAddress || !port || !file) {
      alert("Please provide IP address, port, and select a file.");
      return;
    }

    setUploading(true);

    // Simulate the upload progress (you can replace this with actual file upload logic)
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setUploading(false);
          alert("Upload completed!");
          return 100;
        }
        return prev + 10;
      });
    }, 500);
  };

  return (
    <div className="StandardPageContainer">

   
    <div className={styles.modelUploadContainer}>
      <h1>Upload a file</h1>
      <h3>Essentially, this is just a page to pump an upload to a rest server, nothing fancy</h3>
    <h5>Handy though</h5>
      {/* <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio praesentium repellendus, consequatur fugiat beatae odit veniam harum numquam. Autem, eius.</p> */}
      <div className={styles.formContainer}>
        <div className={styles.inputGroup}>
          <label htmlFor="ip-address" className={styles.label}>IP Address and path (port num only added if you dont:</label>
          <input
            type="text"
            id="ip-address + PATH"
            className={styles.inputField}
            value={ipAddress}
            onChange={handleIpChange}
            placeholder="Enter IP Address  + PATH"
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="port" className={styles.label}>Port:</label>
          <input
            type="text"
            id="port"
            className={styles.inputField}
            value={port}
            onChange={handlePortChange}
            placeholder="Enter Port"
          />
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="file-upload" className={styles.label}>Choose Model File:</label>
          <input
            type="file"
            id="file-upload"
            className={styles.inputField}
            onChange={handleFileChange}
          />
          {file && (
            <div className={styles.stagedFile}>
              <p>File ready to upload: {file.name}</p>
            </div>
          )}
        </div>

        <button 
          className={styles.uploadButton}
          onClick={handleUpload}
          disabled={uploading}
        >
          {uploading ? 'Uploading...' : 'Upload Model'}
        </button>

        <div className={styles.progressContainer}>
          <progress
            value={progress}
            max="100"
            className={styles.progressBar}
          >
            {progress}%
          </progress>
        </div>
      </div>
    </div>
         
    </div>
  );
};

export default ModelUploadPage;
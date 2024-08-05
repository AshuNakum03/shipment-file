// src/components/FileList.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FileList = ({ onAdd }) => {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    fetchFiles();
  }, []);

  const fetchFiles = async () => {
    try {
      const response = await axios.get('http://localhost:3000/files');
      setFiles(response.data);
    } catch (error) {
      console.error('Error fetching files:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/files/${id}`);
      fetchFiles();
    } catch (error) {
      console.error('Error deleting file:', error);
    }
  };

  return (
    <div>
      <button onClick={onAdd}>Add File/Directory</button>
      <ul>
        {files.map((file) => (
          <li key={file._id}>
            {file.name} ({file.type})
            <button onClick={() => handleDelete(file._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FileList;
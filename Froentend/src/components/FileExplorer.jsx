// src/components/FileExplorer.jsx
import React, { useState } from 'react';
import axios from 'axios';
import FileList from './FileList';

const FileExplorer = () => {
  const [name, setName] = useState('');
  const [type, setType] = useState('file');

  const handleAdd = async () => {
    try {
      const response = await axios.post('http://localhost:3000/files', { name, type });
      console.log(response.data);
      setName('');
      setType('file');
    } catch (error) {
      console.error('Error adding file:', error);
    }
  };

  return (
    <div>
      <h1>File Explorer</h1>
      <div>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
        />
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="file">File</option>
          <option value="directory">Directory</option>
        </select>
        <button onClick={handleAdd}>Add</button>
      </div>
      <FileList onAdd={handleAdd} />
    </div>
  );
};

export default FileExplorer;
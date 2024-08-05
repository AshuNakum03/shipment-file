// index.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const File = require('./models/file');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb+srv://ashutosh:ashutosh@cluster0.tyvkl08.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(()=>{
  
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
    console.log("connected")
});

// Create a new file or directory
app.post('/files', async (req, res) => {
  try {
    const file = new File(req.body);
    await file.save();
    res.status(201).send(file);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Get all files and directories
app.get('/files', async (req, res) => {
  try {
    const files = await File.find({});
    res.send(files);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Get a file or directory by ID
app.get('/files/:id', async (req, res) => {
  try {
    const file = await File.findById(req.params.id);
    if (!file) {
      return res.status(404).send();
    }
    res.send(file);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Update a file or directory
app.patch('/files/:id', async (req, res) => {
  try {
    const file = await File.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!file) {
      return res.status(404).send();
    }
    res.send(file);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Delete a file or directory
app.delete('/files/:id', async (req, res) => {
  try {
    const file = await File.findByIdAndDelete(req.params.id);
    if (!file) {
      return res.status(404).send();
    }
    res.send(file);
  } catch (error) {
    res.status(500).send(error);
  }
});


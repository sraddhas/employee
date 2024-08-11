const express = require("express");
const cors = require("cors");
require("./connection"); // Ensure this file connects to MongoDB
const BlogModel = require('./BlogData'); // Ensure this file exports BlogModel

const app = express();
var PORT = 3001;

app.use(express.json());
app.use(cors());

app.post("/add", async (req, res) => {
  try {
    console.log(req.body);
    await BlogModel(req.body).save();
    res.send({ message: "employee added" });
  } catch (error) {
    console.log(error);
    res.status(500).send('Error adding blog');
  }
});

app.put('/employeeedit/:id', async (req, res) => {
  try {
    await BlogModel.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).send('Updated successfully');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error updating');
  }
});

app.delete('/removeemployee/:id', async (req, res) => {
  try {
    await BlogModel.findByIdAndDelete(req.params.id);
    res.status(200).send('Deleted successfully');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error deleting employee');
  }
});

app.get('/employee', async (req, res) => {
  try {
    const data = await BlogModel.find();
    res.status(200).send(data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Data not found');
  }
});

app.listen(PORT, () => {
  console.log(`${PORT} is up and running`);
});

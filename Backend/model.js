//Write missing code here
const mongoose = require('mongoose');

const blogschema = mongoose.Schema({
  EmpName: String,
  designation: String,
  empId: String,
  img_url: String,
});
const BlogData = mongoose.model('blogs',blogschema)
module.export=BlogData

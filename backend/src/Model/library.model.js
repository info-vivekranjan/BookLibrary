const mongoose = require("mongoose");

const librarySchema = new mongoose.Schema(
  {
    bookname: { type: String, required: true },
    author: { type: String, required: true },
    publishDate: { type: String, required: true },
    imgUrl: { type: String, required: true },
    description: { type: String, required: true },
    pages: { type: String, required: true },
    langauge: { type: String, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Library = mongoose.model("library", librarySchema);

module.exports = Library;

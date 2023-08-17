// models/Book.js

const mongoose = require('mongoose');

const ArticleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  authors: {
    type: String,
    required: true
  },
  source: {
    type: String,
    required: true
  },
  pubYear: {
    type: Number,
    required: true
  },
  doi: {
    type: String,
    required: true
  },
  claim: {
    type: String,
    required: true
  },
  evidence: {
    type: String,
    required: true
  },
});

module.exports = Article = mongoose.model('article', ArticleSchema);
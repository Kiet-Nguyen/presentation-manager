const mongoose = require('mongoose');
const validator = require('validator');

const PresentationSchema = new mongoose.Schema({
  presenter: {
    type: String,
    required: true,
    minlength: 1,
    trim: true,
  },
  evaluator: {
    type: String,
    required: true,
    minlength: 1,
    trim: true,
  },
  topic: {
    type: String,
    required: true,
    minlength: 1,
    trim: true,
  },
  article: {
    type: String,
    required: true,
    trim: true,
    validate: {
      validator: validator.isURL,
      message: '{VALUE} is not a valid URL.',
    },
  },
  date: {
    type: String,
    required: true,
  },
  keywords: {
    type: String,
    required: true,
  },
  summary: {
    type: String,
    required: true,
  },
});

const Presentation = mongoose.model('Presentation', PresentationSchema);

module.exports = { Presentation };

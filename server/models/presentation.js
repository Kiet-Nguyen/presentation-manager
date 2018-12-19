const mongoose = require('mongoose');

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
});

const Presentation = mongoose.model('Presentation', PresentationSchema);

module.exports = { Presentation };

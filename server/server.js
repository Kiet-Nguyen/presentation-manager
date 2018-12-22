require('./config/config');

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const { mongoose } = require('./db/mongoose');
const { Presentation } = require('./models/presentation');

const app = express();
const port = process.env.PORT;

app.use(bodyParser.json());

app.get('/presentations', async (req, res) => {
  try {
    const presentations = await Presentation.find();
    res.send(presentations);
  } catch (error) {
    res.status(400).send(error);
  }
});

app.post('/presentations/add', async (req, res) => {
  try {
    const presentation = new Presentation({
      presenter: req.body.presenter,
      evaluator: req.body.evaluator,
      topic: req.body.topic,
      article: req.body.article,
      date: req.body.date,
      keywords: req.body.keywords,
      summary: req.body.summary,
    });
    const doc = await presentation.save();
    res.send(doc);
  } catch (error) {
    res.status(400).send(error);
  }
});

if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, '../client/build')));
  // Handle React routing, return all requests to React app
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

app.listen(port, () => {
  console.log(`Starting app at port ${port}`);
});

module.exports = { app };

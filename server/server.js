require('./config/config');

const express = require('express');
const bodyParser = require('body-parser');

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
    });
    const doc = await presentation.save();
    res.send(doc);
  } catch (error) {
    res.status(400).send(error);
  }
});

app.listen(port, () => {
  console.log(`Starting app at port ${port}`);
});

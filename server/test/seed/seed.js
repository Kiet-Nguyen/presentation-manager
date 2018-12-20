const { ObjectID } = require('mongodb');

const { Presentation } = require('../../models/presentation');

const presentations = [
  {
    _id: new ObjectID(),
    presenter: 'Kiet',
    evaluator: 'Sue',
    topic: 'React',
    article: 'https://mongoosejs.com',
  },
  {
    _id: new ObjectID(),
    presenter: 'Sue',
    evaluator: 'Kiet',
    topic: 'React',
    article: 'https://mongoosejs.com',
  },
];

const populatePresentation = async () => {
  await Presentation.remove({});
  await Presentation.insertMany(presentations);
};

module.exports = { presentations, populatePresentation };

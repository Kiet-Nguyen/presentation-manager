const { ObjectID } = require('mongodb');

const { Presentation } = require('../../models/presentation');

const presentations = [
  {
    _id: new ObjectID(),
    presenter: 'Kiet',
    evaluator: 'Sue',
    topic: 'React',
    article: 'https://mongoosejs.com',
    date: '2018-12-20',
  },
  {
    _id: new ObjectID(),
    presenter: 'Sue',
    evaluator: 'Kiet',
    topic: 'React',
    article: 'https://mongoosejs.com',
    date: '2018-12-20',
  },
];

const populatePresentation = async () => {
  await Presentation.remove({});
  await Presentation.insertMany(presentations);
};

module.exports = { presentations, populatePresentation };

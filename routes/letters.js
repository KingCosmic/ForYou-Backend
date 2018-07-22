const express = require('express');
const bodyParser = require('body-parser');

const router = express.Router();

const Letter = require('../models/letter');

router.get('/', (req, res) => {
  console.log(Date.now() + ' Ping Received');
  res.sendStatus(200);
});

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

router.get('/:letterId', (req, res) => {
  const letterId = req.params.letterId;

  Letter.find({
    letterId
  })
  .limit(1)
  .lean()
  .exec((err, letters) => {
    if (err) return res.status(500).send({ err, message: 'Error accured finding letter' });
    if (letters.length === 0) return res.status(404).send({ err: 404,  message: 'No Letter with that id' });
    let letter = letters[0]

    res.status(200).send({ data: letter })
  })
});

router.post('/write', bodyParser.json(), (req, res) => {
  let content = req.body.content;

  let letter = new Letter({
    content
  });

  letter.save((err, newLetter) => {
    if (err) return res.status(500).send({ err, message: 'Error accured trying to save letter' });

    res.status(200).send({
      data: newLetter.letterId
    })
  })
});

module.exports = router;
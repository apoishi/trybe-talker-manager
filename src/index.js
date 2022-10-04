const express = require('express');
const bodyParser = require('body-parser');
const { readTalkerFile } = require('./utils/readAndWriteFiles');

const app = express();
app.use(bodyParser.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.listen(PORT, () => {
  console.log('Online');
});

// Requirement 1
app.get('/talker', async (_req, res) => {
  const talkers = await readTalkerFile();
  if (talkers) {
    return res.status(HTTP_OK_STATUS).json(talkers);
  }
  return res.status(HTTP_OK_STATUS).json({ message: [] }); 
});

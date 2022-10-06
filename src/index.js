const express = require('express');
const bodyParser = require('body-parser');
const { readTalkerFile, 
  findTalkerById, 
  insertTalkerFile, 
  updateTalkerFile,
  deleteTalker,
  searchTalkerByName,
} = require('./utils/readAndWriteFiles');
const generateToken = require('./utils/generateToken');
const { isEmailValid } = require('./middlewares/validateEmail');
const { isPasswordValid } = require('./middlewares/validatePassword');
const { isAgeValid } = require('./middlewares/validateAge');
const { isNameValid } = require('./middlewares/validateName');
const { isTokenValid } = require('./middlewares/validateToken');
const { isTalkValid } = require('./middlewares/validateTalk');
const { isRateValid } = require('./middlewares/validateRate');
const { isWatchedAtValid } = require('./middlewares/validateWatchedAt');

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

// Requirement 8
app.get('/talker/search', isTokenValid, async (req, res) => {
  const { q } = req.query;
  const filteredTalkers = await searchTalkerByName(q);
  res.status(HTTP_OK_STATUS).json(filteredTalkers);
});

// Requirement 2
app.get('/talker/:id', async (req, res) => {
  const { id } = req.params;
  const talkerId = await findTalkerById(Number(id));
  if (!talkerId) {
    return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
  }
  res.status(HTTP_OK_STATUS).json(talkerId);
});

// Requirement 3 and 4
app.post('/login', isEmailValid, isPasswordValid, async (req, res) => {
res.status(HTTP_OK_STATUS).json({ token: generateToken() });
});

// Requirement 5
app.post('/talker', 
isTokenValid,
isAgeValid, 
isNameValid, 
isTalkValid, 
isRateValid, 
isWatchedAtValid, 
async (req, res) => {
  const newTalker = req.body;
  const newTalkerwithId = await insertTalkerFile(newTalker);
  res.status(201).json(newTalkerwithId);
});

// Requirement 6
app.put('/talker/:id',
isTokenValid,
isAgeValid, 
isNameValid, 
isTalkValid, 
isRateValid, 
isWatchedAtValid,
 async (req, res) => {
  const newInfo = req.body;
  const { id } = req.params;
  const updatedTalker = await updateTalkerFile(newInfo, id);
  res.status(HTTP_OK_STATUS).json(updatedTalker);
});

// Requirement 7
app.delete('/talker/:id', isTokenValid, async (req, res) => {
  const { id } = req.params;

 await deleteTalker(id);
  res.status(204).end();
});

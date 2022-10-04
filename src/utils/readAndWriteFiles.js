const fs = require('fs/promises');

const readTalkerFile = async () => {
  try {
    const arrayTalks = await fs.readFile('src/talker.json', 'utf-8');
    return JSON.parse(arrayTalks);
  } catch (error) {
    console.log(error);
  }
};
// Requirement 2
const findTalkerById = async (talkerId) => {
const talkers = await readTalkerFile();
const result = talkers.find(({ id }) => id === talkerId);
return result;
};

module.exports = {
  readTalkerFile,
  findTalkerById,
};

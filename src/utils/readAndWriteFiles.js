const fs = require('fs/promises');

const readTalkerFile = async () => {
  try {
    const arrayTalks = await fs.readFile('src/talker.json', 'utf-8');
    return JSON.parse(arrayTalks);
  } catch (error) {
    return null;
  }
};

// Requirement 2
const findTalkerById = async (talkerId) => {
  const talkers = await readTalkerFile();
  const result = talkers.find(({ id }) => id === talkerId);
  return result;
};

// Requirement 5
const insertTalkerFile = async (newtalker) => {
  try {
    const talkers = await readTalkerFile();
    const newTalkerWithId = { id: talkers.length + 1, ...newtalker };
    const allTalkers = JSON.stringify([...talkers, newTalkerWithId]);
    await fs.writeFile('src/talker.json', allTalkers);
    return newTalkerWithId;
  } catch (error) {
    console.error(`Error: ${error}`);
  }
};

module.exports = {
  readTalkerFile,
  insertTalkerFile,
  findTalkerById,
};

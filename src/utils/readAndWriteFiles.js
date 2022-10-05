const fs = require('fs/promises');

const readTalkerFile = async () => {
  try {
    const talkers = await fs.readFile('src/talker.json', 'utf-8');
    return JSON.parse(talkers);
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

// Requirement 6
const updateTalkerFile = async (newInfo, talkerId) => {
  try {
    const talkers = await readTalkerFile();
    const index = talkers.findIndex(({ id }) => id === Number(talkerId));
    const updatedTalker = { ...talkers[index], ...newInfo };
    talkers.splice(index, 1, updatedTalker);
    await fs.writeFile('src/talker.json', JSON.stringify(talkers));
    return updatedTalker;
    } catch (error) {
       console.error(`Error: ${error}`);
    }
};

// Requirement 7
const deleteTalker = async (talkerId) => {
  try {
    const talkers = await readTalkerFile();
    const index = talkers.findIndex(({ id }) => id === Number(talkerId));
    talkers.splice(index, 1);
    await fs.writeFile('src/talker.json', JSON.stringify(talkers));
  } catch (error) {
    console.error(`Error: ${error}`);
 }
};

module.exports = {
  readTalkerFile,
  insertTalkerFile,
  findTalkerById,
  updateTalkerFile,
  deleteTalker,
};

const fs = require('fs/promises');

const readTalkerFile = async () => {
  try {
    const arrayTalks = await fs.readFile('src/talker.json', 'utf-8');
    return JSON.parse(arrayTalks);
   } catch (error) {
    const err = new Error('Error reading file');
    err.statusCode = 500;
    throw err;
  }
};

module.exports = {
  readTalkerFile,
};

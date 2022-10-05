const isEmailValid = (req, res, next) => {
  const isFormatEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({
      message: 'O campo "email" é obrigatório',
    });
  }
  if (!isFormatEmail.test(email)) {
    return res.status(400).json({
      message: 'O "email" deve ter o formato "email@email.com"',
    });
  }
  next();
};
  module.exports = { 
    isEmailValid, 
  };
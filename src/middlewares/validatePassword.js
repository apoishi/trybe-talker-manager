const isPasswordValid = (req, res, next) => {
  const { password } = req.body;
  if (!password) {
    res.status(400).json({ 
      message: 'O campo "password" é obrigatório',
    });
  }
  if (password.length < 6) {
    res.status(400).json({
      message: 'O "password" deve ter pelo menos 6 caracteres',
    });
  }
  next();
};

module.exports = {
  isPasswordValid,
};
const jwt = require('jsonwebtoken');

function authentication(req, res, next) {
  // El token tiene que venir en la cabecera de la peticion
  const authorization = req.header('Authorization');
  let token = '';

  if (!authorization) {
    res.status(401).send({ message: 'Access denied' });
  }

  try {
    if (authorization && authorization.toLowerCase().startsWith('bearer')) {
      token = authorization.substring(7);
      const verified = jwt.verify(token, process.env.SECRET);
      console.log(verified);
      req.user = verified;
    }

    next();
  } catch (error) {
    // Si no es valido el token lanza un error.
    res.status(400).send('Invalid Token');
  }
}
module.exports = authentication;

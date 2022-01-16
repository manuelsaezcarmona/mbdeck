/* eslint-disable no-console */
const mongoose = require('mongoose');
require('dotenv').config();
// Creamos o la funcion de la conexion y puede ser una clase.

async function mongoConnect() {
  const user = process.env.DB_USER;
  const passwd = process.env.DB_PASSWD;
  let databaseName;
  if (process.env.NODE_ENV === 'test') {
    databaseName = process.env.DB_NAME_TEST;
  } else {
    databaseName = process.env.DB_NAME;
  }

  try {
    const uri = `mongodb+srv://${user}:${passwd}@manucluster0.xmenl.mongodb.net/${databaseName}`;
    // Para realizar la conexion
    // console.log(uri);

    const mongooseConnect = await mongoose.connect(uri);
    // console.log(`conectado a ${databaseName}`);
    return mongooseConnect;
  } catch (error) {
    throw new Error('Error to connect with db');
  }
}

module.exports = { mongoConnect };

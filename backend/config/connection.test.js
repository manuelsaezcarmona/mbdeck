/* eslint-disable no-undef */
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const { mongoConnect } = require('./connection');

describe('Given a connection with moongoose', () => {
  let initialEnv;
  beforeAll(() => {
    initialEnv = process.env.NODE_ENV;
  });
  afterEach(() => {});
  afterAll(() => {
    process.env.NODE_ENV = initialEnv;
    mongoose.disconnect();
  });
  test('Then should exist DBname for dev enviroment', async () => {
    // Environment development
    process.env.NODE_ENV = 'dev';
    const connect = await mongoConnect();
    expect(connect).toBeTruthy();
    expect(connect.connections[0].name).toBe(process.env.DB_NAME);
    mongoose.disconnect();
  });
  test('Then should exist DBname for test enviroment', async () => {
    // Environment development
    process.env.NODE_ENV = 'test';
    const connect = await mongoConnect();
    expect(connect).toBeTruthy();
    expect(connect.connections[0].name).toBe(process.env.DB_NAME_TEST);
    mongoose.disconnect();
  });
});

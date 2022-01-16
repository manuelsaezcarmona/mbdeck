const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../index.js');
const User = require('../models/user.model');

const data = require('../models/data/users.data.json');

describe('Given the Recipes Collection in DataBaseTest', () => {
  beforeEach(async () => {
    await User.deleteMany({});
    await User.insertMany(data);
  });
  afterAll(() => {
    mongoose.disconnect();
  });
  describe('When the request is GET /recipes', () => {
    it('responds with Status 200', async () => {
      const response = await request(app).get('/user').send();
      console.log('GET All users TEST');
      expect(response.statusCode).toBe(200);
    });
    it('Should Be an Array of users', async () => {
      const response = await request(app).get('/user').send();
      console.log('GET Allusers is an Array');
      expect(response.body).toBeInstanceOf(Array);
    });
  });
});

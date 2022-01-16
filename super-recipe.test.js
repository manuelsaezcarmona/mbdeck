/* eslint-disable no-console */
/* eslint-disable import/extensions */

const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../index.js');
const Recipe = require('../models/recipe.model');

const data = require('../models/data/recipes.data.json');

describe('Given the Recipes Collection in DataBaseTest', () => {
  beforeEach(async () => {
    await Recipe.deleteMany({});
    await Recipe.insertMany(data);
  });
  afterAll(() => {
    mongoose.disconnect();
  });
  describe('When the request is GET /recipes', () => {
    it('responds with Status 200', async () => {
      const response = await request(app).get('/recipes').send();
      console.log('GET All recipes TEST');
      expect(response.statusCode).toBe(200);
    });
    it('Should Be an Array of recipes', async () => {
      const response = await request(app).get('/recipes').send();
      console.log('GET Allrecipes is an Array');
      expect(response.body).toBeInstanceOf(Array);
    });
  });
});

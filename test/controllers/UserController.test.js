const request = require('supertest');
const {
  beforeAction,
  afterAction,
} = require('../setup/_setup');
// const User = require('../../src/models/User');

let api;

beforeAll(async () => {
  api = await beforeAction();
});

afterAll(() => {
  afterAction();
});

test('User | create', async () => {

});


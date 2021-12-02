const {
  beforeAction,
  afterAction,
} = require('../setup/_setup');
const User = require('../../src/models/User');

let user;

beforeAll(async () => {
  await beforeAction();
});

afterAll(() => {
  afterAction();
});

beforeEach(async () => {
  user = await User.create({
    email: 'jesus',
    password: '12345',
  });
});

test('User is created correctly', async () => {

});



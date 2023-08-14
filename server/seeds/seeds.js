const db = require('../config/connection');
const { User, Post, Comment } = require('../models');

const userData = require('./userData.json');

db.once('open', async () => {
  await User.deleteMany({});

  const users = await User.insertMany(techData);

  console.log('Users seeded!');
  process.exit(0);
});

'use strict';

module.exports = {
  generateRandomReviews,
  generateRandomUsers
};

// Make sure to "npm install faker" first.
const faker = require('faker');

function generateRandomReviews(userContext, events, done) {
  // generate data with Faker:
  const date = '0' + faker.random.number({max: 9}) + '/' + faker.random.number({min: 10, max: 30}) + '/' + faker.random.number({min: 16, max: 18});
  const counts = faker.random.number({max: 100}) + ',' + faker.random.number({max:100}) + ',' + faker.random.number({max:100});
  const rating = faker.random.number({min: 1, max: 5});
  const users_id = faker.random.number({min: 1, max: 10000000});
  const restaurant_id = faker.random.number({min: 1, max: 10000000});
  const description = faker.lorem.sentences();
  // add variables to virtual user's context:
  userContext.vars.date = date;
  userContext.vars.counts = counts;
  userContext.vars.rating = rating;
  userContext.vars.users_id = users_id;
  userContext.vars.restaurant_id = restaurant_id;
  userContext.vars.description = description;
  // continue with executing the scenario:
  return done();
}

function generateRandomUsers(userContext, events, done) {
  const name = (faker.name.firstName() + ' ' + faker.name.lastName().slice(0,1) + '.');
  const photo = faker.image.cats();
  const counts = faker.random.number({min: 0, max: 1000}) + ',' + faker.random.number({min: 0, max: 1000}) + ',' + faker.random.number({min: 0, max: 1000})
  const location = faker.address.state();

  userContext.vars.name = name;
  userContext.vars.photo = photo;
  userContext.vars.counts = counts;
  userContext.vars.location = location;

  return done();
}

const faker = require('faker');
const fs = require('fs');
const writeStream = fs.createWriteStream(__dirname + '/reviews.txt');



function generateReviews(writer) {
  let i = 10000000;
  let index = 1;
  write();
  function write() {
    let ok = true;
    do {
      const date = '0' + faker.random.number({max: 9}) + '/' + faker.random.number({min: 10, max: 30}) + '/' + faker.random.number({min: 16, max: 18});
      const counts = faker.random.number({max: 100}) + ',' + faker.random.number({max:100}) + ',' + faker.random.number({max:100});
      const rating = faker.random.number({min: 1, max: 5});
      const users_id = faker.random.number({min: 1, max: 10000000});
      const restaurant_id = faker.random.number({min: 1, max: 10000000});
      const description = faker.lorem.sentences();
      i--;
      if (i === 0) {

        writer.write(`${date}\t${counts}\t${rating}\t${users_id}\t${restaurant_id}\t${description}\n`);
        // writer.write(`${index}\t${date}\t${counts}\t${rating}\t${users_id}\t${restaurant_id}\t${description}\n`);
        console.log('done')
      } else {

        ok = writer.write(`${date}\t${counts}\t${rating}\t${users_id}\t${restaurant_id}\t${description}\n`);
        // ok = writer.write(`${index}\t${date}\t${counts}\t${rating}\t${users_id}\t${restaurant_id}\t${description}\n`);
      }
      index++;
    } while (i > 0 && ok);
    if (i > 0) {

      writer.once('drain', write);
    }
  }
}



generateReviews(writeStream)

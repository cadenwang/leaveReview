const faker = require('faker');
const fs = require('fs');

const writeStream = fs.createWriteStream(__dirname + '/usersmongo.tsv');

function generateUsers(writer) {
  let i = 10000000;
  let index = 1;
  write();
  function write() {
    let ok = true;
    do {
      const name = (faker.name.firstName() + ' ' + faker.name.lastName().slice(0,1) + '.');
      const photo = faker.image.cats();
      const counts = faker.random.number({min: 0, max: 1000}) + ',' + faker.random.number({min: 0, max: 1000}) + ',' + faker.random.number({min: 0, max: 1000})
      const location = faker.address.state();
      i--;
      if (i === 0) {
        writer.write(`${index}\t${name}\t${photo}\t${counts}\t${location}\n`);
        // writer.write(`${name}\t${photo}\t${counts}\t${location}\n`);
        console.log('done')
      } else {

        // ok = writer.write(`${name}\t${photo}\t${counts}\t${location}\n`);
        ok = writer.write(`${index}\t${name}\t${photo}\t${counts}\t${location}\n`);
      }
      index++;
    } while (i > 0 && ok);
    if (i > 0) {

      writer.once('drain', write);
    }
  }
}

generateUsers(writeStream)
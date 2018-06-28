const faker = require('faker');
const fs = require('fs');

const writeStream = fs.createWriteStream(__dirname + '/restaurantsmongo.tsv');

function generateRestaurants(writer) {
  let i = 10000000;
  let index = 1;
  write();
  function write() {
    let ok = true;
    do {
      const name = faker.lorem.words();
      i--;
      if (i === 0) {

          // writer.write(`${name}\n`);
        writer.write(`${index}\t${name}\n`);
        console.log('done')
      } else {

        // ok = writer.write(`${name}\n`);
        ok = writer.write(`${index}\t${name}\n`);
      }
      index++;
    } while (i > 0 && ok);
    if (i > 0) {

      writer.once('drain', write);
    }
  }
}

generateRestaurants(writeStream)
const connection = require('../../database/index.js');

const user_controllers = {
  get: function(req, res) {
  //   users.findAll({
  //     where: {
  //         id: req.headers.user_id
  //     }
  // })
    connection.query(`SELECT * FROM users WHERE id=${random()}`, (err, result) => {
      if (err) {
        console.log(err);
      }
      res.status(200).send(result);
      // console.log(result);
    })
  },
  post: function(req, res) {
    connection.query(`INSERT INTO reviews (name, photo, counts, location) VALUES (${req.body.name}, ${req.body.photo}, ${req.body.counts}, ${req.body.location})` , (err, result) => {
      if (err) {
        console.log(err);
      }
      // console.log(result);
      res.status(200).send('user created');
    })
  }
}

let random = () => {
  return Math.floor(Math.random() * 10000000)
}
const restaurant_controllers = {
  get: function(req, res) {
    connection.query(`SELECT * FROM restaurants where id=${random()}`, (err, result) => {
      // console.log(JSON.stringify(result));
      if (err) {
        console.log(err);
      }
      // console.log(result)
      res.status(200).send(result);
    })
  },
  post: function(req, res) {
    connection.query(`INSERT INTO restaurants (name) VALUES (${req.body.name})` , (err, result) => {
      if (err) {
        console.log(err);
      }
      // console.log(result);
      res.status(200).send('restaurant created')
    })
  }
}

const review_controllers = {
  get: function(req, res) {
    connection.query(`SELECT * FROM reviews WHERE id=${random()}`, (err, result) => {
      if (err) {
        console.log(err);
      }
      // console.log(result);
      res.status(200).send(result);
    })
      // reviews.findAll({
      //     where: {
      //         restaurant_id: id
      //     }
      // })
      
  },
  post: function(req, res) {
    connection.query(`INSERT INTO reviews (date, counts, rating, users_id, restaurants_id, description) VALUES (${req.body.date}, ${req.body.counts}, ${req.body.rating}, ${req.body.users_id}, ${req.body.restaurants_id}, ${req.body.description})` , (err, result) => {
      if (err) {
        console.log(err);
      }
      // console.log(result);
      res.status(200).send('review created')
    })
  },
  put: function(req, res) {
    connection.query('', (err, result) => {
      if (err) {
        console.log(err);
      }
      // console.log(result);
    })
  },
  delete: function(req, res) {
    connection.query('', (err, result) => {
      if (err) {
        console.log(err);
      }
      // console.log(result);
    })
  }
}

const photo_controllers = {
  get: function(req, res) {
    connection.query('SELECT id FROM reviews where id=1', (err, result) => {
      if (err) {
        console.log(err);
        res.status(400).send();
      }
      // console.log(result);
      res.status(200).send([]);
    })
  }
}

module.exports = {
  user_controllers,
  restaurant_controllers,
  review_controllers,
  photo_controllers
}
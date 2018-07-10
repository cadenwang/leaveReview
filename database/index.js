var mysql = require('mysql')
var connection = mysql.createConnection({
    host: '54.162.161.56',
    port: '3306',
    user: 'caden',
    password: 'caden',
    // password: '',
    database: 'yelp'
});

connection.connect((err) => {
    if (err) {
        console.log('error when connecting to db', err);
    } else {
        console.log('connected to db')
    }
});

    module.exports = connection;

// var mongodb = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/yelp";
// mongodb.connect(url, (err, db) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log('Connected to database!')
//     }
// })

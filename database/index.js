// var mysql = require('mysql')
// var connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     database: 'yelp'
// });

// connection.connect((err) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log('connected to db')
//     }
// });

var mongodb = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/yelp";
mongodb.connect(url, (err, db) => {
    if (err) {
        console.log(err);
    } else {
        console.log('Connected to database!')
    }
})

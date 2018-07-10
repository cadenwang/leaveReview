const parser = require('body-parser');
const path = require('path');
const express = require('express');
// require('../database/dataGenerators/restaurantsGen.js');
// require('../database/dataGenerators/usersGen.js');
// require('../database/dataGenerators/reviewsGen.js');
require('newrelic');

const PORT = 3000;
const App = express();
// require('../database/index.js')
require('../database/index.js')
const {router} = require('./router');

App.use(parser.json());
App.use(parser.urlencoded({extended: true}));

App.use(express.static(path.join(__dirname, '../client/dist/')))
// App.get('/loaderio-a5318b4a0a8e4ed821e4fbe1ea72e511/', (req, res) => {
//     res.sendFile(__dirname, 'loaderio-a5318b4a0a8e4ed821e4fbe1ea72e511.txt')
// });
App.use('/api', router)

App.listen(PORT, err => {
    err? console.log('Failed to start server: ', err) : console.log('Listening on port ', PORT)
})
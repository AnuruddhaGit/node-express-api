const express = require('express');
const bodyParser = require('body-parser');

//  create express App
const app = express();

// setup server port
const port = process.env.PORT || 5000;

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())

// Configuring the database
const dbConfig = require('./config/db.config.js');
const mongose = require('mongoose')
mongose.Promise = global.Promise

// Connecting to the database 
mongose.connect(dbConfig.url, {
  useNewUrlParser: true
}).then(() => {
  console.log("Successfully connected to the database")
}).catch(err => {
  console.log('Could not connect to the database.', err);
  process.exit();
})

// define a root/default route
app.get('/', (req, res) => {
  res.json({ "Message": "First Api call" })
})

// Require Users routes
const userRoutes = require('./src/routes/user.routes')

// using as middleware
app.use('/api/users', userRoutes)

// listen for requests
app.listen(port, () => {
  console.log(`Node server is listening on port: ${port}`);
})
// TODO: Create an express server
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('./db/index.js')

// Set up PORT
const PORT = 3000;

// Initialize express server
const app = express();

// Use middleware
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cors());

// server static files
app.use(express.static(path.join(__dirname, '../client/dist')))

// Set up routes
app.get('/api/pokemon', (req, res) => {
  var queryString = `SELECT pokemon.id, pokemon.name, types.type, images.img FROM pokemon INNER JOIN types ON pokemon.typeNum = types.id INNER JOIN images ON pokemon.imageNum = images.id ORDER BY id ASC`
  db.query(queryString, (err, results) => {
    if (err) {
      res.status(400).json(err);
    } else {
      res.status(200).json(results)
    }
  })
})

app.get('/api/type', (req, res) => {
  var queryString = `SELECT type FROM types ORDER BY id ASC`
  db.query(queryString, (err, results) => {
    if (err) {
      res.status(400).json(err);
    } else {
      res.status(200).json(results)
    }
  })
})

// *** GET FOR JUST A SPECIFIC TYPE
app.get('/api/:type', (req, res) => {
  var queryString = `SELECT
    pokemon.id,
    pokemon.name,
    types.type,
    images.img
    FROM pokemon INNER JOIN types
    ON pokemon.typeNum = types.id
    INNER JOIN images
    ON pokemon.imageNum = images.id WHERE types.type='${req.params.type}' ORDER BY id ASC`
  db.query(queryString, (err, results) => {
    if (err) {
      res.status(400).json(err);
    } else {
      res.status(200).json(results)
    }
  })
})


// *** POST is a stretch goal to add pokemon

// *** GET POKEMON OF ONE TYPE
app.delete('/api/:id', (req, res) => {
  var queryString = `DELETE FROM pokemon WHERE id=${req.params.id}`
  db.query(queryString, (err, results) => {
    if (err) {
      res.status(400).json(err);
    } else {
      res.status(200).json('successfully deleted pokemon')
    }
  })
})

app.patch('/api/:id', (req, res) => {
  var queryString = `UPDATE pokemon SET name='${req.body.name}' WHERE id=${req.params.id}`
  db.query(queryString, (err, results) => {
    if (err) {
      res.status(400).json(err);
    } else {
      res.status(200).json('successfully updated pokemon name')
    }
  })
})

// Listen for port
app.listen(PORT, () => {
  console.log('Listening on PORT: ', 3000);
})
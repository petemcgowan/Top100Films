const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const FilmRanking = require('./models/filmRanking');
var cors = require('cors');
import config from './config';

const { PORT } = config;

// express app
const app = express();

// connect to mongodb & listen for requests
//const dbURI = "mongodb://localhost:27017/Blogs";
const dbURI = "mongodb://localhost:27017/100Films";
//const dbURI = "mongodb+srv://localhost:27017/100Films";
//const dbURI = "mongodb+srv://netninja:test1234@net-ninja-tuts-del96.mongodb.net/node-tuts";

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(result => app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`)))
  .catch(err => console.log(err));

// register view engine
app.set('view engine', 'ejs');

//Pete added for different port usage
app.use(cors());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// middleware & static files
app.use(express.static('public'));
app.use(morgan('dev'));
app.use((req, res, next) => {
  res.locals.path = req.path;
  next();
});


// mongoose & mongo tests
app.get('/add-filmRanking', (req, res) => {
  let Rankings = [
    {
      ranker: "r1",
      rank: "45"
    },
    {
      ranker: "r2",
      rank: "2"
    },
    {
      ranker: "r3",
      rank: "78"
    }
  ];

  console.log ("Rankings:" + JSON.stringify(Rankings));
  const filmRanking = new FilmRanking({
    title: 'new title',
    rankings: Rankings,   //needed to specify where it was going, not just the array (of course)
    director: 'the director',
    year: 2000
  })
  console.log ("filmRanking:" + JSON.stringify(filmRanking));

  filmRanking.save()
    .then(result => {
      res.send(result);
    })
    .catch(err => {
      console.log(err);
    });
});


app.get('/all-filmRankings', (req, res) => {
  FilmRanking.find()
    .then(result => {
      // Pete hack: put in 'films' array
      var films = [];
      var objectToSend = {
        films: result
      };

      res.send(objectToSend);
    })
    .catch(err => {
      console.log(err);
    });
});


app.get('/', (req, res) => {
  res.redirect('/blogs');
});

app.get('/about', (req, res) => {
  res.render('about', { title: 'About' });
});

// // 404 page
// app.use((req, res) => {
//   res.status(404).render('404', { title: '404' });
// });
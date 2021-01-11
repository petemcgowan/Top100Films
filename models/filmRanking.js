const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// embedded array of Rankings objects for each film
var Rankings = new mongoose.Schema({
  ranker: String,
  rank: String  //Shouldn't this be a number for ordering purposes?
});

const filmRankingSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  rankings: [Rankings],
  director: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
}, { timestamps: true });

const FilmRanking = mongoose.model('filmRanking', filmRankingSchema);
module.exports = FilmRanking;
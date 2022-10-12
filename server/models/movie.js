// eslint-disable-next-line @typescript-eslint/no-var-requires
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = new Schema({
  id: String,
  name: String,
  genre: String,
  directorId: String
});
const Movie = mongoose.model('Movie', movieSchema);
module.exports = Movie;

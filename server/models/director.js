/* eslint-disable @typescript-eslint/no-var-requires */
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const directorSchema = new Schema({
  image: String,
  name: String,
  age: Number
});

const Director = mongoose.model('Director', directorSchema);
module.exports = Director;

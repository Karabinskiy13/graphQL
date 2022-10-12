/* eslint-disable @typescript-eslint/no-var-requires */
const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require(`../schema/schema`);
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const PORT = 3010;

mongoose.connect(
  'mongodb+srv://ivan:ivan@cluster0.gawvhz2.mongodb.net/movies?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    useCreateIndex: true
  }
);
app.use(cors());

const dbConnection = mongoose.connection;
dbConnection.on('error', (err) => console.log(`Connection error:${err} `));
dbConnection.on('open', () => console.log('connected'));

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

app.listen(PORT, (err) => {
  err ? console.log(err) : console.log('Server gamno!');
});

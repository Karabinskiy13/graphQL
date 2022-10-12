import express from 'express';
import graphqlHTTP from 'express-graphql';
import { schema } from './schema/schema';
import connect from 'mongoose';
import connection from 'mongoose';

const app = express();
const PORT = 3005;

connect(`mongodb+srv://ivan:ivan@cluster0.gawvhz2.mongodb.net/?retryWrites=true&w=majority`, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
  useCreateIndex: true
});

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true
  })
);
const dbConnection = connection;
dbConnection.on('error', (err) => console.log(`Connection error:${err} `));
dbConnection.once('open', () => console.log('connected'));

app.listen(PORT, (err) => {
  err ? console.log(err) : console.log('Server gamno!');
});

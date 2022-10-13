/* eslint-disable @typescript-eslint/no-var-requires */
const graphql = require('graphql');

const { GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLID, GraphQLInt, GraphQLList } =
  graphql;

const Movie = require(`../models/movie`);
const Director = require(`../models/director`);

const MovieType = new GraphQLObjectType({
  name: 'Movie',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    image: { type: GraphQLString },
    genre: { type: GraphQLString },
    director: {
      type: DirectorType,
      resolve(parent, args) {
        return Director.findById(parent.directorId);
      }
    }
  })
});

const DirectorType = new GraphQLObjectType({
  name: 'Director',
  fields: () => ({
    id: { type: GraphQLID },
    image: { type: GraphQLString },
    name: { type: GraphQLString },
    age: { type: GraphQLInt },
    movies: {
      type: new GraphQLList(MovieType),
      resolve(parent) {
        return Movie.find({ directorId: parent._id });
      }
    }
  })
});

const Query = new GraphQLObjectType({
  name: 'Query',
  fields: {
    movie: {
      type: MovieType,
      args: { id: { type: GraphQLID } },
      resolve(args) {
        return Movie.findById(args.id);
      }
    },
    director: {
      type: DirectorType,
      args: { id: { type: GraphQLID } },
      resolve(args) {
        return Director.findById(args.id);
      }
    },
    movies: {
      type: new GraphQLList(MovieType),
      resolve() {
        return Movie.find({});
      }
    },
    directors: {
      type: new GraphQLList(DirectorType),
      resolve() {
        return Director.find({});
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: Query
});

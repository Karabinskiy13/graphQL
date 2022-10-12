import React from "react";
import { Query } from "react-apollo";
import { ALL_MOVIES } from "./queries";

const MoviesList = () => {
  return (
    <div>
      <Query query={ALL_MOVIES}>
        <p>{movies.data}</p>
      </Query>
    </div>
  );
};

export default MoviesList;
//   {/* {({ loading, data, error }) => {
//       if (loading) return "Loading...";

//       if (error) return <p>{error.message}</p>;

//       if (data)
//         return data.movies.map((movie) => {
//           <div>{movie.name}</div>;
//         });
//     }} */}

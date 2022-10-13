import { gql } from "@apollo/client";
export const ALL_DIRECTORS = gql`
  {
    directors {
      id
      image
      name
      age
      movies {
        name
        id
        image
        genre
      }
    }
  }
`;

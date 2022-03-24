import { gql } from "@apollo/client";

export const FETCH_CHARACTERS = gql`
query FetchCharacters {
    characters {
      results {
        name
              species
        origin{
          name
        }
        location{
          name
        }
        episode{
          name
        }
        gender
        image
      }
    }
  }
` 


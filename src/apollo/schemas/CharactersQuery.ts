import { gql } from '@apollo/client';

const GET_CHARACTERS = gql`
  query CharactersQuery($filter: FilterCharacter) {
    characters(filter: $filter) {
      info {
        count
      }
      results {
        id
        name
        image
        episode {
          id
          name
        }
      }
    }
  }
`;

export { GET_CHARACTERS };

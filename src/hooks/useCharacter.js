import { useQuery, gql } from "@apollo/client"

const GET_CHARACTER = gql` 
query GetCharacter($id: ID!){
  character(id : $id) {
      name
    	id  
      image
      episode{
        name
        episode
      }
  }
}`;

export const useCharacters = (id) => {
  const { error, loading, data } = useQuery(GET_CHARACTER, {
    variables: {
      id
    }
  });
  return {
    error,
    loading,
    data,
  }
}
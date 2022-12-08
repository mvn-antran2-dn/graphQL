import React, { useState } from 'react';
import { gql , useLazyQuery} from "@apollo/client"

const GET_CHARACTER_LOCATION = gql` 
query GetCharacterLocations($name: String!){
  characters (filter : {
    name: $name
  }) {
    results {
      location{
        name
      }
    }
  }
}`;

export default function Search() {
  const [name, setName] = useState("");

  const [getLocations, {loading, error, data, called}] = useLazyQuery(GET_CHARACTER_LOCATION, {
    variables: {
      name
    }
  });
  console.log({error, loading, data, called});
  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={() => getLocations()}>search</button>
      {loading && <div>loading...</div>}
      {error && <div>something when wrong</div>}
      {data && (
        <ul>
          {data.characters.results.map((characters) => {
            return <li key={Math.random()}>{characters.location.name}</li>
          })}
        </ul>
      )
      }
    </div>
  )
}

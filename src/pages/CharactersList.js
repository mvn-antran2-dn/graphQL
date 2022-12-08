import React from 'react'
import "./characterlist.css"
import { useCharactersList } from '../hooks/useCharactersList';
import { Link } from 'react-router-dom';

export default function CharactersList() {
  const { error, loading, data } = useCharactersList();
  if (loading) return <div>loading...</div>
  if (error) return <div> something went wrong</div>
  return (<>
      <Link to={`/search`}>
        search
      </Link>
    <div className="character-list">
      {data.characters.results.map(characters => {
        return <Link to={`/${characters.id}`} key={characters.id}>
          <img src = {characters.image} alt='img'/>
          <h2>{characters.name}</h2>
        </Link>
      })}
    </div>
  </>
  )
}

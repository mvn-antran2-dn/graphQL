import React from 'react'
import { useParams } from 'react-router';
import { useCharacters } from '../hooks/useCharacter';
import "./character.css"

export default function Character() {
  const {id} = useParams();
  const { error, loading, data } = useCharacters(id);
  if (loading) return <div>loading...</div>
  if (error) return <div> something went wrong</div>
  console.log({ error, loading, data });
  return (
    <div className="character">
      <img src={data.character.image} alt={data.character.name} width={750} height={750} />
      <div className='character-content'>
        <h1>{data.character.name}</h1>
        <p>{data.character.gender}</p>
        <div className='character-episode'>
          {data.character.episode.map(episode => {
            return <div key={Math.random()}>
              {episode.name} - <b>{episode.episode}</b>
            </div>
          })}
        </div>
      </div>

    </div>
  )
}

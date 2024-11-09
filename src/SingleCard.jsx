import { useState, useEffect } from 'react';
import './styles/SingleCard.css'

function SingleCard({ id, handleClick, idArr }) {
  const [pokeData, setPokeData] = useState(null);
  const [isLoaded, setIsLoaded]=useState(false)

  useEffect(() => {
    async function fetchPokeData() {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, { mode: 'cors' });
      const data = await response.json();
      setPokeData({
        name: data.name,
        imageLink: data.sprites.front_shiny,
      });
    }
    fetchPokeData();
  }, []);

  if (!pokeData) {
    return <div>Loading...</div>;
  }

  return (
    <div className='singleCard' onClick={handleClick}>
      <h3>{pokeData.name}</h3>
      <img src={pokeData.imageLink} alt={pokeData.name} />
    </div>
  );
}

export default SingleCard;
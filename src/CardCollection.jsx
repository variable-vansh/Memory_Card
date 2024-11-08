import SingleCard from "./SingleCard";

function CardCollection() {
    // Generate random 8 numbers
    const randomEightNumbers = random8Numbers();
  
    return (
      <>
      {
        randomEightNumbers.map((number, index)=>(
            <SingleCard key={index} id={number}/>
        ))
      }
      
      </>
    );
  }
  
  function random8Numbers() {
    let randomEightArr = [];
    for (let i = 0; i < 8; i++) {
      randomEightArr.push(Math.floor(Math.random() * 1026));
    }
    return randomEightArr;
  }
  
//   async function getPokeData(id){
//     const response=await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`,{mode:'cors'})
//     let pokeData= await response.json();
//     //name
//     console.log(pokeData.name)
//     //image link
//     console.log(pokeData.sprites.front_shiny)
//   }
  export default CardCollection;
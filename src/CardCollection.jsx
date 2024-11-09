import SingleCard from "./SingleCard";
import './styles/CardCollection.css'

function CardCollection() {
    // Generate random 8 numbers
    const randomEightNumbers = random8Numbers();
  
    return (
      <>
      <div className="cardsCollection">
      {
        randomEightNumbers.map((number, index)=>(
            <SingleCard key={index} id={number}/>
        ))
      }
      </div>
      </>
    );
  }
  
  function random8Numbers() {
    let randomEightArr = [];
    for (let i = 0; i < 8; i++) {
      let RandomNum=Math.ceil(Math.random() * 500)
      if(randomEightArr.includes(RandomNum)){
        i--;
        continue;
      }
      randomEightArr.push(RandomNum);
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
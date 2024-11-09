import SingleCard from "./SingleCard";
import { useState, useEffect} from "react";
import './styles/CardCollection.css'



function CardCollection() {

  const [numbers, setNumbers]=useState(random8Numbers())

  const handleClick = (number) => {
    console.log(`${number} clicked`)
    setNumbers(shuffle([...numbers]))
  };


  return (
    <>
      <div className="cardsCollection">
        {
          numbers.map((number)=>(
            <SingleCard key={number} id={number} handleClick={ ()=>handleClick(number)}/>
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

// Fisher–Yates shuffle
function shuffle(array) {
  let currentIndex = array.length;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
  return(array)
}

export default CardCollection;

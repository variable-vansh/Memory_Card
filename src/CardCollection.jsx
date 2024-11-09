import SingleCard from "./SingleCard";
import {useState} from "react";
import './styles/CardCollection.css'

function CardCollection({score, highScore, setScore, sethighScore}) {
  const [numbers, setNumbers] = useState(random8Numbers());
  const [clickedCardsID, addClickedCardsID] = useState([]);

  const handleClick = (number) => {
    if (clickedCardsID.includes(number)) {
      // Update high score if current score is higher
      if (score > highScore) {
        sethighScore(score);
      }
      // Reset score and clicked cards
      setScore(0);
      addClickedCardsID([]);
      // Generate completely new cards
      setNumbers(random8Numbers());
    } else {
      console.log(`${number} clicked`);
      addClickedCardsID(clickedCardsID.concat(number));
      setScore(score + 1);
      console.log(score);
      // Shuffle existing cards
      setNumbers(shuffle([...numbers]));
    }
  };

  return (
    <>
      <div className="cardsCollection">
        {
          numbers.map((number) => (
            <SingleCard key={number} id={number} handleClick={() => handleClick(number)}/>
          ))
        }
      </div>
    </>
  );
}

function random8Numbers() {
  let randomEightArr = [];
  for (let i = 0; i < 8; i++) {
    let RandomNum = Math.ceil(Math.random() * 500);
    if (randomEightArr.includes(RandomNum)) {
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

  while (currentIndex != 0) {
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]
    ];
  }
  return array;
}

export default CardCollection;
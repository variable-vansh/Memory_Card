import brainLogo from './assets/brain-svgrepo-com.svg'
import ScoreCard from './ScoreCard'
import './styles/Header.css'

function Header({score, highScore}){
    return(
        <>
        <div className="header">
          <div className="leftHeader">
          <a href="https://youtu.be/dQw4w9WgXcQ?si=uocC4qU8WZA5_1Ec" target="_blank">
          <img src={brainLogo} className="logo react" alt="React logo" />
        </a>
        <h1>
          Memory Cards
        </h1>
          </div>
       
        <ScoreCard score={score} highScore={highScore}/>
        {/* <h2>Rules</h2>
        <h2>Scores</h2> */}
        </div>
        </>
    )
}
export default Header
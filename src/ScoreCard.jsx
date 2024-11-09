
function ScoreCard({score, highScore}){
   

    return(
        <div className='scoreBox'>
        <label htmlFor="score">SCORE</label>
        <div>{score}</div>
        <br />
        <label htmlFor="highScore">HIGH-SCORE</label>
        <div>{highScore}</div>
       </div>
    )
}


export default ScoreCard
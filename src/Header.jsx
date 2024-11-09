import brainLogo from './assets/brain-svgrepo-com.svg'
import './styles/Header.css'

function Header(){
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
       
        {/* <h2>Rules</h2>
        <h2>Scores</h2> */}
        </div>
        </>
    )
}
export default Header
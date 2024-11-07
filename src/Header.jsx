import brainLogo from './assets/brain-svgrepo-com.svg'
import './styles/Header.css'

function Header(){
    return(
        <>
        <div className="header">
          <div className="leftHeader">
          <a href="https://react.dev" target="_blank">
          <img src={brainLogo} className="logo react" alt="React logo" />
        </a>
        <h1>
          Memory Cards
        </h1>
          </div>
       
        <h2>Score</h2>
        <h2>High Score</h2>
        </div>
        </>
    )
}
export default Header
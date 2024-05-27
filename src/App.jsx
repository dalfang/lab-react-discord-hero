// src/App.jsx
import './App.css';
import discordLogo from './assets/discord-logo-white.png';
import menuIcon from './assets/menu-icon.png';
import background from './assets/background.png';

function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <img src={discordLogo} alt="Discord Logo" className="logo" />
          <img src={menuIcon} alt="Menu Icon" className="menu-icon" />
        </nav>
        <div className="main-content">
          <h1>IMAGINE A PLACE...</h1>
          <p>
            ...where you can belong to a school club, a gaming group, or a worldwide art community. Where just you and a handful of friends can spend time together. A place that makes it easy to talk every day and hang out more often.
          </p>
          <div className="button-container">
            <button className="download-button">Download for Mac</button>
            <button className="open-button">Open Discord in your browser</button>
            <img src={background} alt="Background" className="background" />
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
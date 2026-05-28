import { Link } from 'react-router-dom';
import formationsCardImg from '../Assets/imgs/formations-card.png';
import tacticsCardImg from '../Assets/imgs/tactics-card.png';
import lineupCardImg from '../Assets/imgs/lineup-card.png';

import '../Styles/Home.css';

function Home() {
 return (
    <>

      <section className="hero">
        <h1>Master the Game</h1>
        <p>Your ultimate hub for football tactics, formations, and strategic planning.</p>
        <Link to="/formations">Explore Formations</Link>
      </section>

      <section className="cards">
        <div className="card">
          <Link to="/formations">
            <img src={formationsCardImg} alt="Formations" />
            <h3>Formations</h3>
            <h6>Explore and understand the most used tactical formations in football</h6>
          </Link>
        </div>

        <div className="card">
          <Link to="/guide">
            <img src={tacticsCardImg} alt="Tactics Guide" />
            <h3>Tactics Guide</h3>
            <h6>Learn strategies and tips used by the best coaches in the world</h6>
          </Link>
        </div>

        <div className="card">
          <Link to="/lineup">
            <img src={lineupCardImg} alt="Lineup Builder" />
            <h3>Lineup Builder</h3>
            <h6>Set up your ideal starting eleven on an interactive pitch</h6>
          </Link>
        </div>
      </section>
    </>
  );
}

export default Home;
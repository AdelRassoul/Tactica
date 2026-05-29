import pressingImg from '../Assets/imgs/pressing.png';
import attackImg from '../Assets/imgs/attack.png';
import defenseImg from '../Assets/imgs/defense.png';
import setImg from '../Assets/imgs/set.png';

import '../Styles/Guide.css';

function Guide() {

  
  function showPressing() {
    document.querySelectorAll('.guide-display-card').forEach(card => card.style.display = 'none');
    document.querySelector('#card-pressing').style.display = 'grid';


    document.querySelectorAll('.menu-tab').forEach(btn => btn.className = 'menu-tab');
    document.querySelector('#btn-pressing').className = 'menu-tab active-tab';
  }


  function showAttacking() {
    document.querySelectorAll('.guide-display-card').forEach(card => card.style.display = 'none');
    document.querySelector('#card-attacking').style.display = 'grid';

    document.querySelectorAll('.menu-tab').forEach(btn => btn.className = 'menu-tab');
    document.querySelector('#btn-attacking').className = 'menu-tab active-tab';
  }


  function showDefending() {
    document.querySelectorAll('.guide-display-card').forEach(card => card.style.display = 'none');
    document.querySelector('#card-defending').style.display = 'grid';

    document.querySelectorAll('.menu-tab').forEach(btn => btn.className = 'menu-tab');
    document.querySelector('#btn-defending').className = 'menu-tab active-tab';
  }


  function showSetPieces() {
    document.querySelectorAll('.guide-display-card').forEach(card => card.style.display = 'none');
    document.querySelector('#card-setpieces').style.display = 'grid';

    document.querySelectorAll('.menu-tab').forEach(btn => btn.className = 'menu-tab');
    document.querySelector('#btn-setpieces').className = 'menu-tab active-tab';
  }

  return (
    <main className="dashboard-layout">
      <h1>Tactical Analysis Guide</h1>
      
      <div className="dashboard-container">

        <div className="dashboard-sidebar">
          <button id="btn-pressing" type="button" className="menu-tab active-tab" onClick={showPressing}>
            Pressing Systems
          </button>
          <button id="btn-attacking" type="button" className="menu-tab" onClick={showAttacking}>
            Attacking Build-up
          </button>
          <button id="btn-defending" type="button" className="menu-tab" onClick={showDefending}>
            Defensive Shape
          </button>
          <button id="btn-setpieces" type="button" className="menu-tab" onClick={showSetPieces}>
            Set Piece Routines
          </button>
        </div>


        <section className="dashboard-screen">
          

          <article id="card-pressing" className="guide-display-card" style={{ display: 'grid' }}>
            <div className="card-info">
              <h2>Pressing Systems</h2>
              <p>Apply immediate, high-intensity pressure on the opponent. A high press traps defenders deep in their own half to force turnovers, while a compact low block seals spaces and conserves energy.</p>
            </div>
            <div className="card-media">
              <img src={pressingImg} alt="Pressing" />
            </div>
          </article>


          <article id="card-attacking" className="guide-display-card" style={{ display: 'none' }}>
            <div className="card-info">
              <h2>Attacking Build-up</h2>
              <p>Stretch the opponent's lines using maximum width and constant spatial movement. Wide wingers pull fullbacks apart, creating open lanes centrally for late midfield runners to exploit.</p>
            </div>
            <div className="card-media">
              <img src={attackImg} alt="Attacking" />
            </div>
          </article>


          <article id="card-defending" className="guide-display-card" style={{ display: 'none' }}>
            <div className="card-info">
              <h2>Defensive Shape</h2>
              <p>Built entirely on structural compactness and discipline. Defensive transitions must be immediate — the second possession is lost, players must drop into defensive recovery zones.</p>
            </div>
            <div className="card-media">
              <img src={defenseImg} alt="Defending" />
            </div>
          </article>


          <article id="card-setpieces" className="guide-display-card" style={{ display: 'none' }}>
            <div className="card-info">
              <h2>Set Piece Routines</h2>
              <p>Highly structured, calculated dead-ball opportunities. Teams drill specific runs and screen blocks to exploit gaps during free kicks, corner routines, and deep throw-ins.</p>
            </div>
            <div className="card-media">
              <img src={setImg} alt="Set Pieces" />
            </div>
          </article>

        </section>
      </div>
    </main>
  );
}

export default Guide;
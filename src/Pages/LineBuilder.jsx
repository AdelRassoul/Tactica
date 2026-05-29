import '../Styles/LineBuilder.css';

const formationsPlaybook = {
  f433: [
    { left: '50%', top: '92%', pos: 'GK' },
    { left: '80%', top: '75%', pos: 'RB' },
    { left: '60%', top: '75%', pos: 'CB' },
    { left: '40%', top: '75%', pos: 'CB' },
    { left: '20%', top: '75%', pos: 'LB' },
    { left: '50%', top: '58%', pos: 'DM' },
    { left: '15%', top: '25%', pos: 'LW' },
    { left: '68%', top: '50%', pos: 'CM' },
    { left: '50%', top: '15%', pos: 'ST' },
    { left: '32%', top: '50%', pos: 'CM' },
    { left: '85%', top: '25%', pos: 'RW' }
  ],
  f442: [
    { left: '50%', top: '92%', pos: 'GK' },
    { left: '80%', top: '75%', pos: 'RB' },
    { left: '60%', top: '75%', pos: 'CB' },
    { left: '40%', top: '75%', pos: 'CB' },
    { left: '20%', top: '75%', pos: 'LB' },
    { left: '40%', top: '58%', pos: 'CM' },
    { left: '15%', top: '48%', pos: 'LM' },
    { left: '60%', top: '58%', pos: 'CM' },
    { left: '40%', top: '20%', pos: 'ST' },
    { left: '60%', top: '20%', pos: 'ST' },
    { left: '85%', top: '48%', pos: 'RM' }
  ]
};

function LineBuilder() {
  function changeFormation(formationKey) {
    const selectedFormation = formationsPlaybook[formationKey];
    if (!selectedFormation) return;

    for (let i = 0; i < 11; i++) {
      const playerElement = document.getElementById(`player-${i + 1}`);
      const textElement = document.getElementById(`pos-${i + 1}`);
      
      if (playerElement && textElement) {
        const data = selectedFormation[i];
        playerElement.style.left = data.left;
        playerElement.style.top = data.top;
        textElement.innerText = data.pos;
      }
    }
  }

  return (
    <main className="workspace-container">
      <h1>Lineup Builder</h1>

      <div className="formation-selector">
        <label onClick={() => changeFormation('f433')}>4-3-3</label>
        <label onClick={() => changeFormation('f442')}>4-4-2</label>
      </div>

      <p className="phase-note">Click a formation to test the dynamic transitions</p>

      <div className="pitch">
        <div id="player-1" className="player" style={{ left: '50%', top: '92%' }}><span className="num">1</span><span id="pos-1" className="pos">GK</span></div>
        <div id="player-2" className="player" style={{ left: '80%', top: '75%' }}><span className="num">2</span><span id="pos-2" className="pos">RB</span></div>
        <div id="player-3" className="player" style={{ left: '60%', top: '75%' }}><span className="num">3</span><span id="pos-3" className="pos">CB</span></div>
        <div id="player-4" className="player" style={{ left: '40%', top: '75%' }}><span className="num">4</span><span id="pos-4" className="pos">CB</span></div>
        <div id="player-5" className="player" style={{ left: '20%', top: '75%' }}><span className="num">5</span><span id="pos-5" className="pos">LB</span></div>
        <div id="player-6" className="player" style={{ left: '50%', top: '58%' }}><span className="num">6</span><span id="pos-6" className="pos">DM</span></div>
        <div id="player-7" className="player" style={{ left: '15%', top: '25%' }}><span className="num">7</span><span id="pos-7" className="pos">LW</span></div>
        <div id="player-8" className="player" style={{ left: '68%', top: '50%' }}><span className="num">8</span><span id="pos-8" className="pos">CM</span></div>
        <div id="player-9" className="player" style={{ left: '50%', top: '15%' }}><span className="num">9</span><span id="pos-9" className="pos">ST</span></div>
        <div id="player-10" className="player" style={{ left: '32%', top: '50%' }}><span className="num">10</span><span id="pos-10" className="pos">CM</span></div>
        <div id="player-11" className="player" style={{ left: '85%', top: '25%' }}><span className="num">11</span><span id="pos-11" className="pos">RW</span></div>
      </div>
    </main>
  );
}

export default LineBuilder;
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
  ],
  f352: [
    { left: '50%', top: '92%', pos: 'GK' },
    { left: '65%', top: '75%', pos: 'CB' },
    { left: '50%', top: '75%', pos: 'CB' },
    { left: '35%', top: '75%', pos: 'CB' },
    { left: '15%', top: '52%', pos: 'LWB' },
    { left: '50%', top: '62%', pos: 'DM' },
    { left: '32%', top: '45%', pos: 'CM' },
    { left: '68%', top: '45%', pos: 'CM' },
    { left: '40%', top: '20%', pos: 'ST' },
    { left: '60%', top: '20%', pos: 'ST' },
    { left: '85%', top: '52%', pos: 'RWB' }
  ],
  f4231: [
    { left: '50%', top: '92%', pos: 'GK' },
    { left: '80%', top: '75%', pos: 'RB' },
    { left: '60%', top: '75%', pos: 'CB' },
    { left: '40%', top: '75%', pos: 'CB' },
    { left: '20%', top: '75%', pos: 'LB' },
    { left: '38%', top: '62%', pos: 'DM' },
    { left: '20%', top: '38%', pos: 'LAM' },
    { left: '62%', top: '62%', pos: 'DM' },
    { left: '50%', top: '16%', pos: 'ST' },
    { left: '50%', top: '38%', pos: 'CAM' },
    { left: '80%', top: '38%', pos: 'RAM' }
  ],
  f532: [
    { left: '50%', top: '92%', pos: 'GK' },
    { left: '62%', top: '76%', pos: 'CB' },
    { left: '50%', top: '76%', pos: 'CB' },
    { left: '38%', top: '76%', pos: 'CB' },
    { left: '18%', top: '72%', pos: 'LWB' },
    { left: '50%', top: '54%', pos: 'CM' },
    { left: '35%', top: '50%', pos: 'CM' },
    { left: '65%', top: '50%', pos: 'CM' },
    { left: '40%', top: '22%', pos: 'ST' },
    { left: '60%', top: '22%', pos: 'ST' },
    { left: '82%', top: '72%', pos: 'RWB' }
  ],
  f4141: [
    { left: '50%', top: '92%', pos: 'GK' },
    { left: '80%', top: '75%', pos: 'RB' },
    { left: '60%', top: '75%', pos: 'CB' },
    { left: '40%', top: '75%', pos: 'CB' },
    { left: '20%', top: '75%', pos: 'LB' },
    { left: '50%', top: '62%', pos: 'DM' },
    { left: '15%', top: '44%', pos: 'LM' },
    { left: '37%', top: '44%', pos: 'CM' },
    { left: '50%', top: '18%', pos: 'ST' },
    { left: '63%', top: '44%', pos: 'CM' },
    { left: '85%', top: '44%', pos: 'RM' }
  ],
  f343: [
    { left: '50%', top: '92%', pos: 'GK' },
    { left: '65%', top: '75%', pos: 'CB' },
    { left: '50%', top: '75%', pos: 'CB' },
    { left: '35%', top: '75%', pos: 'CB' },
    { left: '40%', top: '54%', pos: 'CM' },
    { left: '60%', top: '54%', pos: 'CM' },
    { left: '18%', top: '48%', pos: 'LM' },
    { left: '22%', top: '22%', pos: 'LW' },
    { left: '50%', top: '16%', pos: 'ST' },
    { left: '78%', top: '22%', pos: 'RW' },
    { left: '82%', top: '48%', pos: 'RM' }
  ],
  f4321: [
    { left: '50%', top: '92%', pos: 'GK' },
    { left: '80%', top: '75%', pos: 'RB' },
    { left: '60%', top: '75%', pos: 'CB' },
    { left: '40%', top: '75%', pos: 'CB' },
    { left: '20%', top: '75%', pos: 'LB' },
    { left: '50%', top: '58%', pos: 'CM' },
    { left: '35%', top: '36%', pos: 'AM' },
    { left: '32%', top: '56%', pos: 'CM' },
    { left: '50%', top: '16%', pos: 'ST' },
    { left: '68%', top: '56%', pos: 'CM' },
    { left: '65%', top: '36%', pos: 'AM' }
  ],
  f541: [
    { left: '50%', top: '92%', pos: 'GK' },
    { left: '63%', top: '75%', pos: 'CB' },
    { left: '50%', top: '75%', pos: 'CB' },
    { left: '37%', top: '75%', pos: 'CB' },
    { left: '16%', top: '72%', pos: 'LWB' },
    { left: '42%', top: '50%', pos: 'CM' },
    { left: '24%', top: '48%', pos: 'LM' },
    { left: '58%', top: '50%', pos: 'CM' },
    { left: '50%', top: '18%', pos: 'ST' },
    { left: '76%', top: '48%', pos: 'RM' },
    { left: '84%', top: '72%', pos: 'RWB' }
  ],
  f451: [
    { left: '50%', top: '92%', pos: 'GK' },
    { left: '80%', top: '75%', pos: 'RB' },
    { left: '60%', top: '75%', pos: 'CB' },
    { left: '40%', top: '75%', pos: 'CB' },
    { left: '20%', top: '75%', pos: 'LB' },
    { left: '50%', top: '54%', pos: 'CM' },
    { left: '15%', top: '50%', pos: 'LM' },
    { left: '35%', top: '52%', pos: 'CM' },
    { left: '50%', top: '18%', pos: 'ST' },
    { left: '65%', top: '52%', pos: 'CM' },
    { left: '85%', top: '50%', pos: 'RM' }
  ],
  f442d: [
    { left: '50%', top: '92%', pos: 'GK' },
    { left: '80%', top: '75%', pos: 'RB' },
    { left: '60%', top: '75%', pos: 'CB' },
    { left: '40%', top: '75%', pos: 'CB' },
    { left: '20%', top: '75%', pos: 'LB' },
    { left: '50%', top: '64%', pos: 'DM' },
    { left: '28%', top: '48%', pos: 'CM' },
    { left: '50%', top: '36%', pos: 'CAM' },
    { left: '40%', top: '18%', pos: 'ST' },
    { left: '60%', top: '18%', pos: 'ST' },
    { left: '72%', top: '48%', pos: 'CM' }
  ],
  f3421: [
    { left: '50%', top: '92%', pos: 'GK' },
    { left: '65%', top: '75%', pos: 'CB' },
    { left: '50%', top: '75%', pos: 'CB' },
    { left: '35%', top: '75%', pos: 'CB' },
    { left: '40%', top: '54%', pos: 'CM' },
    { left: '60%', top: '54%', pos: 'CM' },
    { left: '18%', top: '52%', pos: 'LM' },
    { left: '37%', top: '34%', pos: 'AM' },
    { left: '50%', top: '16%', pos: 'ST' },
    { left: '63%', top: '34%', pos: 'AM' },
    { left: '82%', top: '52%', pos: 'RM' }
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
        <label onClick={() => changeFormation('f352')}>3-5-2</label>
        <label onClick={() => changeFormation('f4231')}>4-2-3-1</label>
        <label onClick={() => changeFormation('f532')}>5-3-2</label>
        <label onClick={() => changeFormation('f4141')}>4-1-4-1</label>
        <label onClick={() => changeFormation('f343')}>3-4-3</label>
        <label onClick={() => changeFormation('f4321')}>4-3-2-1</label>
        <label onClick={() => changeFormation('f541')}>5-4-1</label>
        <label onClick={() => changeFormation('f451')}>4-5-1</label>
        <label onClick={() => changeFormation('f442d')}>4-4-2 Diamond</label>
        <label onClick={() => changeFormation('f3421')}>3-4-2-1</label>
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
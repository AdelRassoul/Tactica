import img433 from '../Assets/imgs/4-3-3.png';
import img442 from '../Assets/imgs/4-4-2.png';
import img352 from '../Assets/imgs/3-5-2.png';
import img4231 from '../Assets/imgs/4-2-3-1.png';
import img532 from '../Assets/imgs/5-3-2.png';
import img4141 from '../Assets/imgs/4-1-4-1.png';
import img343 from '../Assets/imgs/3-4-3.png';
import img4321 from '../Assets/imgs/4-3-2-1.png';
import img541 from '../Assets/imgs/5-4-1.png';
import img451 from '../Assets/imgs/4-5-1.png';
import img442D from '../Assets/imgs/4-4-2_Diamond.png';
import img3421 from '../Assets/imgs/3-4-2-1.png';

import '../Styles/Formations.css';

const formationsData = [
  {
    title: "4-3-3",
    image: img433,
    pros: ["Natural high-press structure", "Optimal attacking width", "3v2 build-up advantage", "Fluid front three rotations"],
    cons: ["Exposed flanks in transition", "Single pivot can be bypassed", "Striker isolated vs. low block", "Requires high defensive line"]
  },
  {
    title: "4-4-2",
    image: img442,
    pros: ["Two compact defensive blocks", "Clear marking responsibilities", "Classic strike partnership dynamic", "Effective wide counter-press"],
    cons: ["Outnumbered centrally (3v2)", "Gap between midfield & attack", "No natural #10 in pockets", "Predictable buildup patterns"]
  },
  {
    title: "3-5-2",
    image: img352,
    pros: ["Midfield numerical superiority", "Wing-backs create front 5 attack", "Dual striker pressing ease", "Safe 3v2 build-up shape"],
    cons: ["Vulnerable to channel balls", "Extreme physical demand on WB", "Outside CBs dragged wide vs. 4-3-3", "Poor rest-defense if WBs caught high"]
  },
  {
    title: "4-2-3-1",
    image: img4231,
    pros: ["Double pivot screens defense", "Four vertical passing lanes", "Easy transition to 4-4-2 block", "Zonal press with #10 cut-off"],
    cons: ["Over-reliance on #10 creativity", "Wingers must track fullbacks deep", "Vertical gap if lines disconnect", "Striker 1v2 battle constant"]
  },
  {
    title: "5-3-2",
    image: img532,
    pros: ["Impenetrable box in defense", "Ideal for direct counter-attacks", "Always +1 sweeper advantage", "Dominant on second balls"],
    cons: ["No possession outlet", "Zero advanced width", "Lacks progressive ball carrier", "Invites relentless pressure"]
  },
  {
    title: "4-1-4-1",
    image: img4141,
    pros: ["Optimized for counter-pressing", "#6 covers advancing fullbacks", "Easy wide double-teams", "Flexible block height adjustment"],
    cons: ["Large gap between #6 and #9", "Linear, rigid build-up shape", "Striker completely isolated", "No between-the-lines threat"]
  },
  {
    title: "3-4-3",
    image: img343,
    pros: ["Overwhelming 5-man front line", "Automatic high-trap on touchline", "Triangular wide overloads", "Libero can step into midfield"],
    cons: ["Suicide ball on turnover", "Requires elite sweeper-keeper", "Wing-back exposed on quick switch", "Ineffective vs. deep low block"]
  },
  {
    title: "4-3-2-1",
    image: img4321,
    pros: ["Total central congestion control", "Short, crisp wall-pass combos", "Solid midfield triangle base", "Two free creative #10s"],
    cons: ["Zero natural width", "Vulnerable to overlapping wing-backs", "Attacking traffic jam centrally", "#9 isolated with no wide relief"]
  },
  {
    title: "5-4-1",
    image: img541,
    pros: ["Maximum goalline protection", "Eliminates winger 1v1 threat", "Massive space behind for counters", "Frustrates opponent rhythm"],
    cons: ["Inability to sustain possession", "Lone striker burnout risk", "Cannot press high collectively", "High own-goal deflection risk"]
  },
  {
    title: "4-5-1",
    image: img451,
    pros: ["Flat 5 denies all central pockets", "Safe ball retention to see out games", "Wide double-coverage secure", "Quick shift to 4-3-3 if needed"],
    cons: ["Slow attacking transitions", "Striker isolation (hold-up only)", "Wingers receive ball facing own goal", "No penetration without technical 8s"]
  },
  {
    title: "4-4-2 Diamond",
    image: img442D,
    pros: ["Complete central overload (4v3)", "Ideal for deep-lying playmaker", "Tight #10 + Strikers triangle"],
    cons: ["Flanks completely vacant", "Fullbacks face permanent 2v1", "Shuttlers (#8s) cover immense width"]
  },
  {
    title: "3-4-2-1",
    image: img3421,
    pros: ["Occupies half-spaces perfectly", "Double #10 protects wing-backs", "Fluid, unmarkable front 5"],
    cons: ["High-risk front press", "Requires wide CB 1v1 defending", "Buildup reliant on pressured WBs"]
  }
];



function Formations() {

  function handleCardClick(index) {
    const formation = formationsData[index];

    document.querySelector('#expanded-title').innerText = formation.title;
    document.querySelector('#expanded-img').src = formation.image;
    document.querySelector('#expanded-img').alt = formation.title;

    const prosList = document.querySelector('#expanded-pros');
    prosList.innerHTML = '';
    formation.pros.forEach(pro => {
      const li = document.createElement('li');
      li.innerText = pro;
      prosList.appendChild(li);
    });

    const consList = document.querySelector('#expanded-cons');
    consList.innerHTML = '';
    formation.cons.forEach(con => {
      const li = document.createElement('li');
      li.innerText = con;
      consList.appendChild(li);
    });

    document.querySelector('#master-grid-container').style.display = 'none';
    document.querySelector('#expanded-view-container').style.display = 'block';
  }

  function handleBackClick() {
    document.querySelector('#expanded-view-container').style.display = 'none';
    document.querySelector('#master-grid-container').style.display = 'block';
  }

  return (
    <main className="formations-wrapper">
      

      <div id="master-grid-container">
        <h2 className="click-to-expand-title">Click to Expand</h2>
        
        <section className="cards">
          {formationsData.map((formation, index) => (
            <div className="card" key={index} onClick={() => handleCardClick(index)} style={{ cursor: 'pointer' }}>
              <h3>{formation.title}</h3>
              <img src={formation.image} alt={formation.title} />
            </div>
          ))}
        </section>
      </div>


      <div id="expanded-view-container" style={{ display: 'none' }}>
        <button type="button" className="back-btn" onClick={handleBackClick}>Back</button>
        
        <div className="expanded-card-layout">
          <h2 id="expanded-title">Formation Title</h2>
          <img id="expanded-img" src="" alt="" />

          <p className="pros">Pros :</p>
          <ul id="expanded-pros"></ul>

          <p className="cons">Cons :</p>
          <ul id="expanded-cons"></ul>
        </div>
      </div>

    </main>
  );
}
export default Formations;
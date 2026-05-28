import {BrowserRouter as Router , Routes , Route } 
          from 'react-router-dom'; 


function App() {
  return (
    <Router>

      <Routes>
        <Route path="/" exact Component={Home}></Route>
        <Route path="/formations" exact Component={Formations}></Route>
        <Route path="/guide" exact Component={Guide}></Route>
        <Route path="/lineup" exact Component={LineBuilder}></Route>
        <Route path="/contact" exact Component={Contact}></Route>
      </Routes>


    </Router>
  );
}

export default App;
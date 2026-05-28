import {BrowserRouter as Router , Routes , Route } 
          from 'react-router-dom'; 
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import Guide from './Pages/Guide';
import Formations from './Pages/Formations';
import LineBuilder from './Pages/LineBuilder';
import Contact from './Pages/Contact';

function App() {
  return (
    <Router>

      <Navbar />

      <Routes>
        <Route path="/" exact Component={Home}></Route>
        <Route path="/formations" exact Component={Formations}></Route>
        <Route path="/guide" exact Component={Guide}></Route>
        <Route path="/lineup" exact Component={LineBuilder}></Route>
        <Route path="/contact" exact Component={Contact}></Route>
      </Routes>

      <Footer />

    </Router>
  );
}

export default App;
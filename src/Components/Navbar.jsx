import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <div className="logo">Tactica</div>
      <ul>
        <li><Link to="/">HOME</Link></li>
        <li><Link to="/formations">FORMATIONS</Link></li>
        <li><Link to="/guide">TACTICAL GUIDE</Link></li>
        <li><Link to="/lineup">LINE BUILDER</Link></li>
        <li><Link to="/contact">CONTACT</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
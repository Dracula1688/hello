import { Link } from 'react-router-dom';
import './all.css';


const Navbar = () => {
  return (
    <nav>
      <header className="container">
          <Link to='/' className="logo">
            DARKER
          </Link>
          <div className="links">
              <Link to='/' className="nav-link">Home</Link>
              <Link to='/product' className="nav-link">Product</Link>
              <Link to='/contact' className="nav-link">Contact</Link>
          </div>
      </header>
    </nav>
  )
}

export default Navbar

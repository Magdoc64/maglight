import logoMaglight from '../../assets/identite visuelle/logo-violet-extrasmall.png';
import { NavLink } from 'react-router-dom'
import './Header.css';

const Header = () => {
  return (
    <header className="container header"> 
        <NavLink to="/maglight" id='accueil' className='header-logo'><img src = {logoMaglight} alt = 'logo Maglight' /></NavLink>
        <nav className='header-nav'>
            <NavLink to="/services" className='header-nav-item' id='services'>Services</NavLink>
            <NavLink to="/projects" className='header-nav-item' id='projects'>Projets</NavLink>
        </nav>
        <a href='#' className='header-contact'>
            <i className="fa-solid fa-phone-volume"></i>
            <span>06.61.55.95.01</span>
        </a>
    </header>
  );
}

export default Header;
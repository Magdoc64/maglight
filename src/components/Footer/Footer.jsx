import smallMaglight from '../../assets/identite visuelle/logo-violet-extrasmall.png';
import './footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="container footer">
        <div className="footer-links">
            <Link to="/mention" className="footer-links-link">Mentions légales</Link>
            <Link to="/politique" className="footer-links-link">Politique de confidentialité</Link>
            <a href='mailto:maglight64@proton.me' className="footer-links-link">Support</a>
        </div>
        <div className="footer-copyright">
                <span>&copy; {new Date().getFullYear()}</span> 
                <img src={smallMaglight} alt='petit logo Maglight'/>
                <span>- Tous droits réservés.</span>
        </div>
    </footer>
  );
};  

export default Footer;
import smallMaglight from '../../assets/identite visuelle/logo-violet-extrasmall.png';
import './footer.css';

const Footer = () => {
  return (
    <footer className="container footer">
        <div className="footer-links">
            <a href="#" className="footer-links-link">Mentions légales</a>
            <a href="#" className="footer-links-link">Politique de confidentialité</a>
            <a href="#" className="footer-links-link">Support</a>
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
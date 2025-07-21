import { Link, useNavigate } from 'react-router-dom';
import './card.css';
import PropTypes from 'prop-types';

const Card = ({id,link,imageUrl,imageAlt,name,excerpt,font,need,soluce}) => {
    let idService = id;
    let linkService = link
    const page = useNavigate();
    
    const handleClick = () =>{
        if(link && typeof(idService) === 'number'){
            page(`/services/${linkService}`)
        }else{
            page('*')
        } 
    }
    return link? (
        <Link to={`/services/${linkService}`} onClick={handleClick} className="card card-link">
        {imageUrl && <img src={imageUrl} alt={imageAlt} className="card-image" />}
            <div className="card-content">
                <h3 className="card-content-title">{name}</h3>
                {!excerpt ?
                <div className='card-content-punchline'>
                    {need && <p className="card-content-punchline-need">{need}</p>}
                    {soluce && <p className="card-content-punchline-soluce">
                        <i className="fa-solid fa-handshake-angle"></i>
                        <span>{soluce}</span>
                    </p>} 
                </div> : typeof excerpt === 'string' ? 
                <p className="card-content-description">{excerpt}</p> 
                : 
                <ul className="card-content-list">
                    {excerpt.map((item) => (
                    <li key={item}>{item}</li>
                    ))}
                </ul>}
            </div>
            {font && <ul className="card-icon">
                {font.map(icon => (
                <li key={icon}><i  className={icon}></i></li>
                ))}
            </ul>}
        </Link>
  ):(
        <div className="card">
            {imageUrl && <img src={imageUrl} alt={imageAlt} className="card-image" />}
            <div className="card-content">
                <h3 className="card-content-title">{name}</h3>
                {!excerpt ?
                <div className='card-content-punchline'>
                    {need && <p className="card-content-punchline-need">{need}</p>}
                    {soluce && <p className="card-content-punchline-soluce">
                        <i className="fa-solid fa-handshake-angle"></i>
                        <span>{soluce}</span>
                    </p>} 
                </div> : typeof excerpt === 'string' ? 
                <p className="card-content-description">{excerpt}</p> : 
                <ul className="card-content-list">
                    {excerpt.map((item) => (
                    <li key={item}>{item}</li>
                    ))}
                </ul>}
            </div>
            {font && <ul className="card-icon">
                {font.map(icon => (
                <li key={icon}><i  className={icon}></i></li>
                ))}
            </ul>}
        </div>
    );
}

Card.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string.isRequired,
    excerpt: PropTypes.any,
    imageUrl: PropTypes.string,
    imageAlt: PropTypes.string,
    font: PropTypes.array,
    link: PropTypes.string,
    need: PropTypes.string,
    soluce: PropTypes.string
};

export default Card;
import { Link } from 'react-router-dom'
import regularMaglight from '../../assets/identite visuelle/logo-blanc.png'
import detailServices from '../../assets/avatar/detailServices.png'
import detailProjects from '../../assets/avatar/mes projets.png'
import avatar from '../../assets/avatar/avatar_transparent.png'
import contact from '../../assets/avatar/Avatar-tel_transparent.png'
import './home.css'
import ButtonCta from '../../components/ButtonCta/ButtonCta'
import Cards from '../../components/Card/Card'
import Form from '../../components/Form/Form'
import Modal from '../../components/Modal/Modal'
import services from '../../data/services.js'
import thumbnails from '../../data/thumbnails.json'
import skills from '../../data/skills.json'

const Home = () => {
  return (
    <main className='container home'>
      <section className='home-hero'>
        <img src={regularMaglight} alt="Maglight Logo" className="home-hero-logo" />
        <h1>Illuminez vos projets web</h1>
        <ButtonCta text="Me contacter" onClick={() => window.location.href = '#contact'} />
      </section>
      <section className='home-services' id='services'>
        <h2 className='home-services-title'> 
          <span>Services proposés</span>
          <Link to='/services' className='home-services-link'><img src={detailServices} alt="Accès à la page services" className="home-services-image" /></Link>
        </h2>
        <div className='home-services-description'>
        {services.map(service => (
          <Cards
            key={service.id}
            name={service.name}
            excerpt={service.excerpt}
            imageUrl={service.imageChoiceUrl}
            imageAlt={service.imageChoiceAlt}
            link={service.link}
          />
        ))
        }
        </div>
        <div className='home-services-cta'>
          <ButtonCta text="Me contacter" onClick={() => window.location.href = '#contact'} />
        </div>
      </section>
      <section className='home-aboutme' id='about'>
        <div className='home-aboutme-softskills'>
          <img src={avatar} alt="Avatar de Magali" className="home-aboutme-softskills-avatar" />
          <div className='home-aboutme-softskills-description'>
            {thumbnails.map((thumbnail) => (
              <div key={thumbnail.id} className="home-aboutme-softskills-description-thumbnail">
                <h3 className="home-aboutme-softskills-description-thumbnail-title">
                  <i className={thumbnail.font}></i>
                  <span>{thumbnail.name}</span>
                </h3>
                <p className="home-aboutme-softskills-description-thumbnail-content">{thumbnail.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className='home-aboutme-presentation'>
          <h2>Qui suis-je?</h2>
          <p>
            Hello, développeuse frontend JS ES6/React.js, j'aime faire prendre vie à vos projets et vous rendre visible sur la toile au travers du code. Je suis passionnée par le développement web et je m'efforce de rester à jour avec les dernières tendances et technologies. J'aime relever des défis et trouver des solutions créatives pour répondre aux besoins de mes clients.<br />
            <br />
            J’ai acquis des compétences en WordPress afin de m’adapter à un plus grand nombre de projets.<br />
            <br />
            Ma formation UX/UI designer me rend particulièrement sensible aux besoins des utilisateurs et à l'ergonomie des interfaces pour qu'elles soient la plus facile d'utilisation.<br />
            <br />
            Mes différentes expériences m'ont permis d'acquérir une rigueur et des capacités en matière d'organisation, et de planification nécessaire à la conduite de projet, et au développement d'un code performant et facilement maintenable.
            <br />
          </p>
        </div>
      </section>
      <section className='home-projects' id='projects'>
        <h2>
          <span>Savoir-faire</span>
          <Link to='/projects' className='home-projects-link'><img src={detailProjects} alt="Accès à la page projets" className="home-projects-image" /></Link>
        </h2>
        <div className='home-projects-skills'>
          {skills.map(skill => (
            <Cards
              key={skill.id}
              name={skill.name}
              excerpt={skill.excerpt}
              font={skill.font}
            />
          ))}
        </div>
      </section>
      <section className='home-contact' id='contact'>
        <div className='home-contact-info'>
          <img src={contact} alt="Contact Magali" className="home-contact-info-avatar" />
          <div className='home-contact-info-details'>
            <p className='home-contact-info-details-name'>Magali alias Maglight</p>
            <p className='home-contact-info-details-phone'>
              <i className="fa-solid fa-phone-volume"></i>
              <span>06.61.55.95.01</span>
            </p>
            <p className='home-contact-info-details-email'>
              <i className="fa-solid fa-envelope"></i>
              <span>maglight64@proton.me</span>
            </p>
            <p className='home-contact-info-details-address'>
              <i className="fa-solid fa-location-dot"></i>
              <span>Pau (64) - Ribérac (24)</span>
            </p>
          </div>
          <div className='home-contact-info-social'>
            <a href='https://www.linkedin.com/in/magali-cvdrby/' target='_blank' rel='noopener noreferrer' className='home-contact-info-social-link'>
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href='https://github.com/Magdoc64' target='_blank' rel='noopener noreferrer' className='home-contact-info-social-link'>
              <i className="fa-brands fa-github"></i>
            </a>
          </div>
        </div>
        <div className='home-contact-form'>
          <h2 className='home-contact-form-title'>Me contacter</h2>
          <div className='home-contact-form-container'>
            <Modal Content={
              <div className="modalMessage-success">
                <div>Message envoyé !</div>
                <p>Merci pour votre message nous tâcherons de vous répondre dans les plus brefs délais.</p>
              </div>}
            >
              {({ setIsOpened }) => (
                <Form
                  onSuccess={() => setIsOpened(true)}
                  onError={() => null}
                />
              )}
            </Modal>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home

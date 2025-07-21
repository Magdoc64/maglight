import {NavLink, useParams} from 'react-router-dom'
import services from '../../data/services.json'
import Error from '../Error/Error'
import Modal from '../../components/Modal/Modal'
import FormDevis from '../../components/FormDevis/FormDevis'
import ButtonCta from '../../components/ButtonCta/ButtonCta'
import './serviceDetail.css'

const ServiceDetail = () => {
    const {linkService} = useParams();
    
    const currentService = services.find(service => service.link == linkService);
   
    return !currentService ? (
        <Error />
    ):(
        <main className='container service'>
            <nav className='service-nav'>
                {services.map(service => (
                    <NavLink to={`/services/${service.link}`} key={service.id} className='service-nav-item'>{service.nameMenu}</NavLink>
                ))}
            </nav>
            <section className='service-hero'>
                <img src={currentService.imageChoiceUrl} alt={currentService.imageChoiceAlt}/>
                <div className='service-hero-cta'>
                    <h1>{currentService.name}</h1>
                    <Modal Content={
                        <div className="modalMessage-success">
                            <div>Votre demande est bien envoyée!</div>
                            <p>Nous y répondrons dans les plus brefs délais.</p>
                        </div>}>
                    {({ setIsOpened }) => (    
                        <FormDevis
                            onSucess={() => setIsOpened(true)}
                            onError={()=> null}>
                            {({ setIsOpened }) => (
                                <ButtonCta text="Demander un devis" onClick={()=> setIsOpened(true)} />
                            )}
                        </FormDevis>)}
                </Modal>
                </div>
            </section>
            <section className='service-description'>
                <h2>Description de la prestation</h2>
                <p className='service-description-detail'>{currentService.description}</p>
            </section>
            <section className='service-method'>
                <h2>Méthodologie de la prestation</h2>
                <p className='service-method-detail'>{currentService.method}</p>
            </section>
            <section className='service-stage'>
                <h2>Etapes de la prestation</h2>
                <ul>
                    {currentService.stage.map(stage => (
                    <li key={`${stage}`}>{stage}</li>
                    ))}
                </ul>
            </section>
            <ButtonCta text="Demander un devis"  />
        </main>
        
        
    
    )
}

export default ServiceDetail
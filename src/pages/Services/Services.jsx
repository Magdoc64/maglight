import './services.css';
import BanniereServices from '../../assets/projet/banniere-services.webp';
import services from '../../data/services.json';
import ButtonCta from '../../components/ButtonCta/ButtonCta';
import Card from '../../components/Card/Card'
import Modal from '../../components/Modal/Modal';
import FormDevis from '../../components/FormDevis/FormDevis';

const Services = () => {
  return (
    <main className="container services">
        <section className="services-hero">
            <img src={BanniereServices} alt="Bannière des services" className="services-hero-image" />
            <h1>Mes services</h1>
            <div className="services-hero-cta">
                <h2>Vous avez un projet web en tête ?</h2>
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
        <section className="services-details">
            {services.map((service) => (
                <Card 
                    key={service.id}
                    id={service.id}
                    name={service.title}
                    link={service.link}
                    imageUrl={service.imageChoiceUrl}
                    imageAlt={service.imageChoiceAlt}
                    need={service.need}
                    soluce={service.soluce}
                />
            ))}
        </section>
    </main>
  );
}

export default Services;
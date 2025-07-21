import './projects.css'
import { useState } from 'react'
import projects from '../../data/projects';
import categories from '../../data/categories.json';
import ButtonCta from '../../components/ButtonCta/ButtonCta';
import Modal from '../../components/Modal/Modal';
import FormDevis from '../../components/FormDevis/FormDevis';
import ModalProject from '../../components/ModalProject/ModalProject';

const Projects = () => {
    const [categoryId, setCategoryId] = useState(null);

    const filteredProjects = !categoryId? projects : projects.filter(project => project.categoryId == categoryId) ;

    return (
        <main className="container projects">
            <section className="projects-hero">
                <h1>Mes projets</h1>
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
            </section>
            <section className="projects-details">
                <ul className='projects-details-filter'>
                    <li className="projects-details-filter-item" onClick={()=> setCategoryId(null)}>Tous</li>
                    {categories.map(categorie => (
                        <li key={categorie.id} className="projects-details-filter-item" onClick={()=> setCategoryId(categorie.id)}>
                            {categorie.name}
                        </li>
                    ))}
                </ul>
                <div className='projects-details-list'>
                    {filteredProjects.map((project) => (
                    <Modal key={project.id} Content={<ModalProject project={project}/>}>
                        {({ setIsOpened }) => (
                        <div  className="projects-details-list-card" onClick={() => setIsOpened(true)}>
                            <img src={project.imageUrl} alt={project.imageAlt} className="projects-details-list-card-image" />
                            <div className="projects-details-list-card-content">
                                <h3 className="projects-details-list-card-content-title">{project.name}</h3>
                                <ul className='projects-details-list-card-content-tags'>
                                    {project.tags.map((item,index) => (
                                    <li key={`${index}-${item}`} className='projects-details-list-card-content-tags-item'>{item}</li>
                                ))}
                                </ul>
                            </div>
                        </div>)}
                    </Modal>
                    ))}
                </div>
            </section>
        </main>
    );
}

export default Projects;
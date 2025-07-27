import PropTypes from "prop-types";
import '../modalProject/modalproject.css'

const ModalProject = ({ project }) => {
    
    return (
        <div className="modal-project">
            <div className="modal-project-image">
                <img src={project.imageModalUrl} alt={project.imageAlt}/>
            </div>
            <div className="modal-project-text">
                <h3 className="modal-project-text-title">{project.name}</h3>
                <div className="modal-project-text-description">
                    <div className="modal-project-text-description-category">
                        <h4>Type de projet</h4>
                        <p>{project.category}</p>
                    </div>
                    <div className="modal-project-text-description-technic">
                        <h4>Techniques utilisées</h4>
                        <p>
                        {project.tags.map((item,index) => (
                            <span key={index}>{item}</span>
                        ))}
                        </p>
                    </div>
                <div className="modal-project-text-description-commentary">
                    <h4>Description du projet</h4>
                    <ul className="modal-project-text-description-commentary-detail">
                        {project.description.map((element,index) => (
                            <li key={index}>{element}</li>
                        ))}</ul>
                </div>
                <div className="modal-project-text-description-link">
                    {project.link &&
                        <a href={project.link} target="_blank">Lien vers le projet</a>
                    }
                </div>
            </div>
            </div>
            
        </div>
    )
}

ModalProject.propTypes = {
  project: PropTypes.object.isRequired,
}

export default ModalProject
import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import "./formDevis.css"

const FormDevis = ({opened, children, onSucess, onError}) => {
    const apiKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_DEVIS_ID;
    const formDevis =useRef();
    const [isOpened, setIsOpened] = useState(opened);
    
    const sendFormDevis = (e) => {
        e.preventDefault();
        
        const formDevisCurrent = {
            lastName: formDevis.current[0].value,
            firstName: formDevis.current[1].value,
            email: formDevis.current[2].value,
            phone: formDevis.current[3].value,
            subject: formDevis.current[4].value,
            url: formDevis.current[5].value,
            message: formDevis.current[6].value
        }
        
        emailjs.send(serviceId,templateId, formDevisCurrent, apiKey)
        .then(
            () => {
                onSucess()
                setIsOpened(false)       
        })
        .catch((error) => {
            onError(error)
                
        })

        formDevis.current.reset()
    }
   
    return (
        <>
      {children({ isOpened, setIsOpened })}
      {isOpened && (
        <div className='formModal'>
            <div className='formModal-content'>
                <div className='formModal-content-contact'>
                    <h2>Demande de devis</h2>
                    <form ref={formDevis} className='formModal-content-contact-formDevis' onSubmit={sendFormDevis}>
                        <div className='formModal-content-contact-formDevis-name'>
                            <div className='formModal-content-contact-formDevis-name-lastname'>
                                <label htmlFor='lastName'>Nom</label>
                                <input type='text' id='lastName' name='lastName' required/>
                            </div>
                            <div className='formModal-content-contact-formDevis-name-firstname'>
                                <label htmlFor='firstName'>Prénom</label>
                                <input type='text' id='firstName' name='firstName'/>
                            </div>
                        </div>
                        <div className='formModal-content-contact-formDevis-contact'>
                            <div className='formModal-content-contact-formDevis-contact-email'>
                                <label htmlFor='email'>Email</label>
                                <input type='email' id='email' name='email' required/>
                            </div>
                            <div className='formModal-content-contact-formDevis-contact-tel'>
                                <label htmlFor='tel'>Téléphone</label>
                                <input type='tel' id='tel' name='tel'/>
                            </div>
                        </div>
                        <div className='formModal-content-contact-formDevis-objet'>
                            <label htmlFor='subject'>Quel serait votre projet?</label>
                            <select id='subject' name='subject' required>
                                <option value=""></option>
                                <option value="dev-web">Développement web</option>
                                <option value="refonte wp">Refonte Wordpress</option>
                                <option value="seo">Optimisation SEO</option>
                                <option value="ux-ui">UX/UI design</option>
                                <option value="ignore">Je ne sais pas</option>
                            </select>
                        </div>
                        <div className='formModal-content-contact-formDevis-url'>
                            <label htmlFor='url'>Si vous avez déjà un site, pouvez vous préciser son url &#40;www.exemple-site.com &#41;?</label>
                            <input type='text' id='url' name='url'/>
                        </div>
                        <div className='formModal-content-contact-formDevis-message'>
                            <label htmlFor='message'>Quels sont vos objectifs avec ce projet?</label>
                            <textarea id='message' name='message' required></textarea>
                        </div>
                        <p className='formModal-content-contact-formDevis-info'>Champs obligatoires</p>
                        <div className='formModal-content-contact-formDevis-choice'>
                            <input type='checkbox' id='choice' name='choice' required/>
                            <label htmlFor='choice'>J'accepte que mes données personnelles soient utilisées uniquement pour me recontacter.</label>
                        </div>
                        <button className='formModal-content-contact-formDevis-button'>Envoyer</button>
                    </form>
                </div>
                <button type="button" onClick={() => setIsOpened(false)} className="formModal-content-button">
                <i className="fa-solid fa-xmark"></i>
            </button>
            </div>
        </div> )} 
    </>
    )
}

export default FormDevis
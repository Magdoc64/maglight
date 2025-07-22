import './mention.css';
const Mention = () => {
    return (
        <main className="container mention">
            <h1>Mentions légales</h1>
            <h2>1. Éditeur du site</h2>
            <ul>
                <li>Nom de l’entreprise : Maglight</li>
                <li>Statut : Micro-entreprise</li>
                <li>Adresse du siège social : 6 chemin Toustet 64420 Espoey</li>
                <li>Téléphone : 06.61.55.95.01</li>
                <li>Email : maglight64@proton.me</li>
                <li>Numéro SIRET : 94531284100014</li>
                <li>TVA intracommunautaire : TVA non applicable, article 293 B du CGI</li>
            </ul>
            <h2>2. Hébergement</h2>
            <ul>
                <li>Hébergeur : Hostinger</li>
                <li>Adresse : 61 Lordou Vironos Street, 6023 Larnaca, Chypre</li>
                <li>Téléphone : +370 645 03378</li>
                <li>Site web : <a href="https://www.hostinger.com/fr" target="_blank" rel="noopener noreferrer">www.hostinger.com</a></li>
            </ul>
            <h2>3. Propriété intellectuelle</h2>
            <p>L’ensemble des éléments présents sur ce site (textes, images, graphismes, logo, icônes, etc.) est protégé par les lois en vigueur sur la propriété intellectuelle.<br/>
            Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable.</p>
            <h2>4. Données personnelles</h2>
            <p>Conformément au Règlement Général sur la Protection des Données (RGPD), les données personnelles collectées via le site (formulaire de contact, newsletter, etc.) sont utilisées uniquement dans le cadre de la relation commerciale.<br/>
            Vous disposez d’un droit d’accès, de rectification, de suppression ou d’opposition sur les données vous concernant.<br/>
            Pour exercer ce droit, contactez : <a href="mailto:maglight64@proton.me">maglight64@proton.me.</a></p>
            <h2>5. Repsonsabilité</h2>
            <p>Maglight s’efforce de fournir des informations précises et à jour sur ce site. Cependant, elle ne peut garantir l’exactitude, la complétude ou l’actualité des informations diffusées.<br/>
            En conséquence, Maglight décline toute responsabilité pour les éventuels dommages directs ou indirects résultant de l’utilisation de ce site ou de l’impossibilité d’y accéder.</p>
            <h2>6. Liens externes</h2>
            <p>Le site peut contenir des liens vers d’autres sites web. Maglight n’a pas le contrôle sur le contenu de ces sites et ne peut être tenue responsable de leur contenu ou de leur politique de confidentialité.<br/>
            L’inclusion de ces liens n’implique pas l’approbation de Maglight quant au contenu des sites liés.</p>
            <h2>7. Modifications des mentions légales</h2>
            <p>Maglight se réserve le droit de modifier les présentes mentions légales à tout moment. Les utilisateurs sont invités à consulter régulièrement cette page pour prendre connaissance des éventuelles modifications.<br/>
            La dernière mise à jour des mentions légales a été effectuée le 24 juillet 2025.</p>
            <h2>8. Loi applicable</h2>
            <p>Les présentes mentions légales sont régies par le droit français. Tout litige relatif à l’utilisation du site sera soumis à la compétence des tribunaux français.</p>
            <h2>9. Contact</h2>
            <p>Pour toute question ou demande d’information concernant les mentions légales, vous pouvez nous contacter à l’adresse suivante : <a href="mailto:maglight64@proton.me">maglight64@proton.me</a>
            </p>
        </main>
    );
};
export default Mention;

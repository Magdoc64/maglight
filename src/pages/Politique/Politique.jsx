import './politique.css';

const Politique = () => {
  return (
    <main className='container politique'>
        <h1>Politique de confidentialité</h1>
        <h2>1. Introduction</h2>
        <p>La présente politique de confidentialité a pour but d’informer les utilisateurs du site www.maglight.com (ci-après « le Site ») sur la manière dont Maglight, micro-entreprise de développement web, collecte, utilise et protège leurs données personnelles conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés.</p>
        <h2>2. Responsable du traitement</h2>
        <ul>
            <li>Nom de l’entreprise : Maglight</li>
            <li>Responsable : Magali Civadier</li>
            <li><a href="mailto:maglight64@proton.me">maglight64@proton.me</a></li>
            <li>Téléphone :06.61.55.95.01</li>
        </ul>
        <h2>3. Données collectées</h2>
        <p>Les données personnelles susceptibles d’être collectées sur le Site sont :</p>
        <ul>
            <li>Nom, prénom</li>
            <li>Adresse email</li>
            <li>Numéro de téléphone (si fourni)</li>
            <li>Messages envoyés via le formulaire de contact</li>
        </ul>
        <h2>4. Finalités de la collecte</h2>
        <p>Les données collectées sont utilisées pour :</p>
        <ul>
            <li>Répondre aux demandes de contact ou de devis.</li>
            <li>Gérer la relation client et assurer le suivi des projets.</li>
        </ul>
        <h2>5. Base légale du traitement</h2>
        <p>Le traitement des données repose sur :</p>
        <ul>
            <li>Le consentement de l’utilisateur (case à cocher lors du formulaire).</li>
            <li>L’exécution d’un contrat ou de mesures précontractuelles (demande de devis, commande).</li>
        </ul>
        <h2>6. Durée de conservation</h2>
        <p>Les données sont conservées :</p>
        <ul>
            <li>Jusqu’à 3 ans après le dernier contact pour les prospects.</li>
            <li>Pendant la durée légale nécessaire pour les obligations comptables (clients).</li>
        </ul>
        <h2>7. Destinataires des données</h2>
        <p>Les données personnelles ne sont en aucun cas vendues ni transmises à des tiers, sauf :</p>
        <ul>
            <li>À des sous-traitants techniques (hébergeur, prestataires web) pour le bon fonctionnement du Site.</li>
            <li>Aux autorités légales si requis par la loi.</li>
        </ul>
        <h2>8. Droits des utilisateurs</h2>   
        <p>Conformément au RGPD, vous disposez des droits suivants :</p>
        <ul>
            <li>Accès à vos données.</li>
            <li>Rectification de vos données.</li>
            <li>Suppression de vos données.</li>
            <li>Opposition ou limitation du traitement.</li>
            <li>Portabilité de vos données.</li>
            <li>Retrait de votre consentement à tout moment.</li>
        </ul>
        <p>Pour exercer ces droits, contactez <a href="mailto:maglight64@proton.me">maglight64@proton.me</a>.</p>
        <h2>9. Sécurité des données</h2>
        <p>Maglight s’engage à mettre en œuvre des mesures techniques et organisationnelles appropriées pour protéger les données personnelles contre la perte, l’accès non autorisé, la divulgation, l’altération ou la destruction. Cependant, aucune méthode de transmission sur Internet ou de stockage électronique n’est totalement sécurisée. Maglight ne peut garantir une sécurité absolue.</p>
    </main>
  );
}
export default Politique;
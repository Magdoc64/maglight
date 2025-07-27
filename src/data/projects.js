import projet1Card from "../assets/projet/P6-Architecte-card.webp"
import projet1Modal from "../assets/projet/P6-Architecte-modal.webp"
import projet2Card from "../assets/projet/P7-kasa-card.webp"
import projet2Modal from "../assets/projet/P7-kasa-modal.webp"
import projet3Card from "../assets/projet/P10-ArgentBank-card.webp"
import projet3Modal from "../assets/projet/P10-ArgentBank-modal.webp"
import projet4Card from "../assets/projet/P8-Optimisation-card.webp"
import projet4Modal from "../assets/projet/P8-Optimisation-modal.webp"
import projet5Card from "../assets/projet/P9-debuggage-card.webp"
import projet5Modal from "../assets/projet/P9-debuggage-modal.webp"
import projet6Card from "../assets/projet/anteis-card.webp"
import projet6Modal from "../assets/projet/anteis-modal.webp"

const projects = [
    {
        "id":1,
        "name":"Porfolio architecte",
        "category":"Développement web",
        "categoryId":1,
        "tags":["HTML/CSS","JavaScript"],
        "description":[
            "Conception d'un portfolio en javacscript vanilla.", 
            "Utilisation d'une API avec système de connexion pour l'affichage dynamique des différents projets.", 
            "Création d'une modale pour l'ajout/suppression de nouveaux projets en mode édition."
        ],
        "link":"https://github.com/Magdoc64/FrontEnd.git",
        "imageCardUrl":projet1Card,
        "imageModalUrl":projet1Modal,
        "imageAlt":"capture d'écran du portfolio de l'architecte"
    },
    {
        "id":2,
        "name":"Appli location d'hébergements",
        "category":"Développement web",
        "categoryId":1,
        "tags":["Javascript","React"],
        "description":[
            "Conception d'une appli pour la location d'hébergements touristiques en singlePage avec React.", 
            "Utilisation React router pour le paramétrage des différentes pages de l'appli.", 
            "Utilisation de composants pour supprimer le code redonnant."
        ],
        "link":"https://magdoc64.github.io/P7-Kasa/",
        "imageCardUrl":projet2Card,
        "imageModalUrl":projet2Modal,
        "imageAlt":"capture d'écran de l'appli Kasa"
    },{
        "id":3,
        "name":"Appli d'une agence bancaire",
        "category":"Développement web",
        "categoryId":1,
        "tags":["JavaScript","React","Redux"],
        "description":[
            "Conception d'un système d'authentification à l'aide d'une API et de React.", 
            "Utilisation de Redux pour la mise en place de la gestion des états", 
            "Définition de la documentation de l'API pour le développement de la partie transaction du client à l'aide de Swagger"
        ],
        "link":"https://magdoc64.github.io/P10-ArgentBank-Frontend/",
        "imageCardUrl":projet3Card,
        "imageModalUrl":projet3Modal,
        "imageAlt":"capture d'écran de l'appli ArgentBank"
    },{
        "id":4,
        "name":"SEO - Portfolio d'une photographe",
        "category":"Optimisation SEO",
        "categoryId":3,
        "tags":["HTML/CSS","Lighthouse","Wave"],
        "description":[
            "Optimisation SEO du portfolio avec une amélioration de l'accessibilité", 
            "Amélioration des performances et optimisation des images avec mise en place du srcset", 
            "Ajout d'un référencement local et de données enrichies ainsi que le référencement pour les réseaux sociaux"
        ],
        "link":"https://magdoc64.github.io/P8-ninacarducci/",
        "imageCardUrl":projet4Card,
        "imageModalUrl":projet4Modal,
        "imageAlt":"capture d'écran du rapport d'optimisation"
    },{
        "id":5,
        "name":"Debuggage d'un site",
        "category":"Développement web",
        "categoryId":1,
        "tags":["React","React devTool","Jest"],
        "description":[
            "Analyse des anomalies de développement à des fins de diagnostic à l'aide de React DevTool", 
            "Corrections afin de débugger le site", 
            "Création de tests unitaires avec Jest afin de vérifier le bon fonctionnement"
        ],
        "link":"https://github.com/Magdoc64/p9-debugger-site-evenementiel.git",
        "imageCardUrl":projet5Card,
        "imageModalUrl":projet5Modal,
        "imageAlt":"capture d'écran du site débuggé"
    },{
        "id":6,
        "name":"Refonte d'un site",
        "category":"UX/UI design",
        "categoryId":4,
        "tags":["Tests utilisateurs", "Maquettage", "Spécification"],
        "description":[
            "En vue de la refonte du site d'un cabinet en ergonomie, analyse de l'existant à l'aide, entre autre, de retours utilisateurs", 
            "Réalisation de tri de cartes pour définir l'architecture, maquettage et réalisation de tests utilisateurs de validation des solutions proposées", 
            "Rédaction de spécifications à destination du webmaster du site"
        ],
        "link":"",
        "imageCardUrl":projet6Card,
        "imageModalUrl":projet6Modal,
        "imageAlt":"capture d'écran du site concerné"
    }
]
export default projects
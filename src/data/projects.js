import projet1 from "../assets/projet/P6-architecte.webp"
import projet2 from "../assets/projet/P7-kasa.webp"
import projet3 from "../assets/projet/P10-Argentbank.webp"
import projet4 from "../assets/projet/P8-Optimisation.webp"
import projet5 from "../assets/projet/P9-debuggage.webp"
import projet6 from "../assets/projet/anteis.webp"

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
        "imageUrl":projet1,
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
        "link":"https://github.com/Magdoc64/P7-Kasa.git",
        "imageUrl":projet2,
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
        "link":"https://github.com/Magdoc64/P10-ArgentBank-Frontend.git",
        "imageUrl":projet3,
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
        "imageUrl":projet4,
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
        "imageUrl":projet5,
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
        "link":"https://anteis.net/",
        "imageUrl":projet6,
        "imageAlt":"capture d'écran du site concerné"
    }
]
export default projects
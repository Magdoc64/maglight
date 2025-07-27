import projet1CardImage from "../assets/projet/exempleCode-card.webp"
import projet1CBanniereImage from "../assets/projet/exempleCode-banniere.webp"
import projet2CardImage from "../assets/projet/exempleWordpress-card.webp"
import projet2BanniereImage from "../assets/projet/exempleWordpress-banniere.webp"
import projet3CardImage from "../assets/projet/lighthouseSEO-card.webp"
import projet3BanniereImage from "../assets/projet/lighthouseSEO-banniere.webp"
import projet4CardImage from "../assets/projet/exempleWireframe-card.webp"
import projet4BanniereImage from "../assets/projet/exempleWireframe-banniere.webp"

const services = [
    {
        "id":1,
        "name":"Développement Web",
        "title": "Création de site web",
        "nameMenu":"Développement web",
        "excerpt":"Création de sites web modernes et responsives.",
        "imageCardUrl":projet1CardImage,
        "imageBanniereUrl": projet1CBanniereImage,
        "imageAlt":"Image de code",
        "link":"creation-site-web",
        "need":"Besoin d'un site vitrine ou d'une boutique e-commerce ?",
        "soluce":"Trouvons ensemble la solution adaptée à vos besoins.",
        "description":"Création de sites ou ajout de fonctionnalités sur des sites existants. Développement à l'aide de React ou de Wordpress selon vos besoins. Un développement centré utilisateur et optimisé pour le référencement naturel afin de garantir un bon usage et une visibilité à votre projet.",
        "technologies":[
            "HTML/CSS",
            "JavaScript",
            "React avec Redux",
            "WordPress",
            "PHP"
        ],
        "method":"Une approche Agile : vous êtes partie prenante du projet. Nous travaillons ensemble pour garantir que le site répond à vos attentes et aux besoins de vos utilisateurs.",
        "stage":[
            "Analyse de votre demande et des besoins utilisateurs",
            "Conception de l'architecture du site",
            "Validation du projet avec vous",
            "Développement du site avec validation régulière avec vous",
            "Tests et corrections",
            "Mise en ligne du site",
            "Formation à l'utilisation du site",
            "Maintenance et support technique"
        ]
    },
    {
        "id":2,
        "name":"Refonte de site WordPress",
        "title": "Refonte ou migration de site",
        "nameMenu":"Refonte WP",
        "excerpt":"Actualisation d'un site WordPress ou changement d'un CMS pour WordPress.",
        "imageCardUrl":projet2CardImage,
        "imageBanniereUrl":projet2BanniereImage,
        "imageAlt":"Capture d'écran d'un site WordPress",
        "link":"refonte-migration-site",
        "need":"Vous avez un projet de refonte ou de migration de site ?",
        "soluce":"Modernisons ensemble votre site avec WordPress.",
        "description":"Modernisation de votre site, amélioration de son design et optimisation de ses performances à l'aide de WordPress et de ses très nombreuses fonctionnalités.",
        "technologies":[
            "WordPress",
            "PHP",
            "SQL"
        ],
        "method":"Une approche Agile : vous êtes partie prenante du projet. Nous travaillons ensemble pour garantir que le site répond à vos attentes et aux besoins de vos utilisateurs.",
        "stage":[
            "Analyse de votre demande, de l'existant et des besoins utilisateurs",
            "Conception de la nouvelle architecture du site",
            "Validation du projet avec vous",
            "Développement de l'application avec validation régulière avec vous",
            "Tests et corrections",
            "Mise en ligne du site",
            "Formation à l'utilisation de l'administration du site",
            "Maintenance et support technique"
        ]
    },
    {
        "id":3,
        "name":"Optimisation SEO",
        "title": "Référencement de site",
        "nameMenu":"Référencement SEO",
        "excerpt":"Amélioration de la visibilité de votre site sur les moteurs de recherche et de ses performances.",
        "imageCardUrl":projet3CardImage,
        "imageBanniereUrl": projet3BanniereImage,
        "imageAlt":"Capture d'écran d'un rapport Lighthouse",
        "link":"optimisation-seo",
        "need":"Vous souhaitez améliorer la visibilité de votre site ?",
        "soluce":"Optimisons ensemble votre référencement naturel (SEO).",
        "description":"Pour les applications React ou pour des sites WordPress avec thème sur-mesure : analyse de la sémantique HTML et de l'accessibilité, analyse de vos images, optimisation du contenu, amélioration de la vitesse de chargement et de l'expérience utilisateur. Possibilté de réaliser un référencement local et d'améliorer le partage sur les réseaux sociaux.",
        "technologies":[
            "HTML/CSS",
            "JavaScript",
            "React",
            "WordPress",
            "PHP"
        ],
        "method":"Diagnostic de votre site et de ses performances à l'aide de Lighthouse, de GTmetrix et de Google Search Console. Diagnostic de l'accessibilité à l'aide de Wave.",
        "stage":[
            "Analyse de votre demande et des besoins utilisateurs",
            "Diagnostic de votre site et de ses performances",
            "Optimisation de la sémantique HTML et de l'accessibilité",
            "Optimisation des images et du contenu",
            "Diagnostic de la vitesse de chargement et de l'expérience utilisateur après corrections",
            "Remise d'un rapport détaillé des optimisations effectuées",
            "Après validation, mise en ligne des optimisations"
        ]
    },
    {
        "id":4,
        "name":"UX/UI Design",
        "title": "Maquettage UX/UI",
        "nameMenu":"UX/UI Design",
        "excerpt":"Conception de maquettes et prototypes pour vos projets web.",
        "imageCardUrl":projet4CardImage,
        "imageBanniereUrl":projet4BanniereImage,
        "imageAlt":"Exemple d'un wireframe",
        "link":"maquettage-ux-ui",
        "need":"Vous réfléchissez à créer un site mais vous n'avez pas le design ?",
        "soluce":"Construisons ensemble une maquette UX/UI pour votre projet.",
        "description":"Conception d'une expérience utilisateur optimale et d'un design moderne et fonctionnel à l'aide de maquettes et de prototypes. Possibilité de réaliser des tests utilisateurs pour valider les choix de design et d'ergonomie et de nouvelles foncitonnalités.",
        "technologies":[
            "Figma",
            "Klaxoon",
            "Xmind",
            "Maze",
            "Stark"
        ],
        "method":"Une approche itérative avec vous et les utilisateurs cibles afin de définir une maquette adaptée.",
        "stage":[
            "Analyse de votre demande et de vos besoins",
            "Recueil des besoins utilisateurs",
            "Synthèse et production d'idées pour élaborer la structure du site",
            "Production de la maquette et/ou du prototype",
            "Evaluation de la maquette et/ou du prototype avec les utilisateurs",
            "Remise des différents livrables (maquette, prototype, rapport d'évaluation)"
        ]
    }
]

export default services
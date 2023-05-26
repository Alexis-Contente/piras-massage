import '../../../public/styles/team.css';
import Image from 'next/image';
import IconGithub from '../../data/pictures/icons8-github-64.png';
import IconLinkedin from '../../data/pictures/icons8-linkedin-64.png';
import Profile from '../../data/pictures/profile.jpg';

function Team() {
    return(
        <>
            <main className="container__team">
                <Image className="photo__profile" src={Profile} alt="Photo de profil d'Alexis"></Image>
                <p className="presentation__team">
                    Ce site a entièrement été réalisé par Alexis Contente, jeune développeur web fullstack, spécialisé React, tout droit sortit d'une formation développeur web & web mobile de l'école O'clock.
                </p>
                <p className="techno__team">
                    Ce site a été créé à l'aide du framework Next.js qui s'appuie sur la bibliothèque Javascript React et sur la technologie Node.js. L'éditeur de code utilisé est Visual Studio Code et l'outil de gestion est Git.
                </p>
                <p className="inprogress">
                    Le site est accessible et utilisable mais il n'est pas encore terminé. Celui-ci tend à évoluer grâce à l'ajout de nouvelles informations et fonctionnalités pour faciliter l'utilisation de l'utilisateur.
                </p>
                <p className="reseaux__team">
                    <a href='https://www.linkedin.com/in/alexis-contente/' target="_blank"><Image className="icon__lk" src={IconLinkedin} alt="Icône du réseau social Facebook"></Image></a>         
                    <a href='https://github.com/Alexis-Contente' target="_blank"><Image className="icon__gh" src={IconGithub} alt="Icône du réseau social Instagram"></Image></a>
                </p>
            </main>
        </>
    )
}

export default Team;
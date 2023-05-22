import '../../../public/styles/about.css'
import Link from 'next/link';

function About () {
    return (
        <main className="about__container">
            <p className="text__about">Cette application est un site qui permet de proposer les services de Piras Massage.<br />
                Elle met en avant les prestations proposées par Davide Piras, un masseur thérapeute professionnel exerçant ce métier depuis plusieurs années, diplômé et certifié par plusieurs instituts.<br />
                Vous retrouvez toutes les informations liées aux prestations dans l'onglet <Link className="link__about" href="/massages">MASSAGES</Link>.<br />
                Pour plus d'informations ou pour prendre rendez-vous, n'hésitez pas à contacter Davide Piras via l"onglet <Link className="link__about" href="/massages">CONTACT</Link>.</p>
        </main>
    );
}

export default About;
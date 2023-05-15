import './home.css';
import ImgHome from '../data/pictures/massage2.jpg';
import Header from '../components/Header/header';
import Footer from '../components/Footer/footer'
import Image from 'next/image';

function Home() {
    return (
        <>

                <main>

                    <div className="container">
                        <h1 className="titre">Cabinet de massage et de soin énergétique à Paris</h1>
                        
                        <p className="intro">Les massages et les soins énergétiques ne sont pas une pratique nouvelle, puisqu'ils sont utilisés depuis des milliers d'années. Ces séances aident à renforcer le système immunitaire, soulager le stress et l'anxiété ou retrouver énergie et vitalité. Entre le travail, la maison, les enfants, l’école, les activités extrascolaires, le shopping... Le rythme de vie actuel et les journées de travail marathon nous font vivre des épisodes de nervosité, d'insomnie, de stress et d'anxiété. Avec ces niveaux de stress et d'anxiété, il n'est pas surprenant que la plupart d'entre nous souffrent de contractures, non seulement physiques mais aussi psychologiques, qui causent des blocages énergétiques. Un massage professionnel est en mesure de vous libérer de ces maux.
                        
                        Pour réserver vos séances avec un thérapeute bien-être à Paris, contactez Piras massage. Du lundi au dimanche, de 10h à 20h, je vous propose des soins de qualité au 47 rue Henri Barbus pour vous détendre et vous revigorer.</p>

                        <Image className="imgHome" src={ImgHome} alt="Espace détente avec pierre et fleures"></Image>
                    </div>

                    <article className="informations">

                        <section className="left">
                            <h2 className="titre2">A qui s'adressent mes soins et massages ?</h2>
                        
                            <p className="cibles">Je propose mes services à une gamme variée de clients. Que ce soit pour un enfant, une femme ou un homme, vous pouvez me contacter pour des séances de massage et de soins énergétiques. Ensemble, nous tenterons de trouver l’origine de votre mal et les zones les plus touchées. Nous adopterons ensuite un protocole de massages ciblés qui éliminera la source de votre gêne de manière durable.</p>
                        </section>

                        <section className="right">
                            <h2 className="titre3">Une thérapie adaptée pour chaque besoin</h2>

                            <p className="besoins">Chaque client est unique et a des besoins spécifiques. Pour un travail de qualité, j’adapte ma thérapie au besoin de chaque client. Pour ce faire, j’utilise diverses techniques que j’ai apprises durant ma formation :

                                <div className="massages">
                                    <p>· Massage Deep Tissue.</p>
                                    <p>· Massage Fascia.</p>
                                    <p>· Thaï massage.</p>
                                    <p>· Aroma Herba Oil.</p>
                                    <p>· Reiki.</p>
                                </div>

                                <button className="link-massages">Retrouvez tous les détails ici !</button>
                            </p>

                        </section>
                    </article>
                </main>

        </>
    );
}

export default Home;
import './massagesPage.css';

function MassagesPage() {
    return (
        <>
            <main className="massages__page">
                <h1 className="title__massages">Mes préstations</h1>
                    <section className="list__massages" aria-label="Massages list">
                        <div className="massages__body">

                            <details aria-expanded="false" className="massage__detail">
                                <summary className="massage__label">Thérapie Fascia</summary>
                                <div className="faq__panel-body">
                                    <p className="faq__panel-description">Le massage fascia est basé sur une thérapie manuelle qui vise à relâcher les tensions et les douleurs dans les fascias. Il s’agit de tissus conjonctifs qui entourent toutes les structures du corps pour les soutenir, les modeler et les protéger. Dans son état normal, le fascia est détendu et étiré. Cependant, diverses causes telles qu'un traumatisme, une surcharge, une posture incorrecte ou un manque d'activité peuvent rendre le fascia plus rigide et moins souple. Cela est dû à une formation incorrecte du collagène pendant la régénération des tissus, dans laquelle les fibres de collagène se réticulent au lieu d'être parallèles les unes aux autres. J’utilise mes connaissances anatomiques pour concevoir un massage personnalisé qui détecte les blocages et les tensions du visage afin de les libérer et d'améliorer ces tissus en les oxygénant et en les relaxant. Grâce à mes massages, les fascias seront décrispés pour qu’ils retrouvent leur place, leur rythme, et laissent circuler l’énergie.</p>
                                </div>
                            </details>
                    
                            <details aria-expanded="false" className="massage__detail">
                                <summary className="massage__label">Massage Fascia</summary>
                                <div className="faq__panel-body">
                                    <p className="faq__panel-description">
                                    Le massage fascia est basé sur une thérapie manuelle qui vise à relâcher les tensions et les douleurs dans les fascias. Il s’agit de tissus conjonctifs qui entourent toutes les structures du corps pour les soutenir, les modeler et les protéger. Dans son état normal, le fascia est détendu et étiré. Cependant, diverses causes telles qu'un traumatisme, une surcharge, une posture incorrecte ou un manque d'activité peuvent rendre le fascia plus rigide et moins souple. Cela est dû à une formation incorrecte du collagène pendant la régénération des tissus, dans laquelle les fibres de collagène se réticulent au lieu d'être parallèles les unes aux autres. J’utilise mes connaissances anatomiques pour concevoir un massage personnalisé qui détecte les blocages et les tensions du visage afin de les libérer et d'améliorer ces tissus en les oxygénant et en les relaxant. Grâce à mes massages, les fascias seront décrispés pour qu’ils retrouvent leur place, leur rythme, et laissent circuler l’énergie.
                                    </p>
                                </div>
                            </details>

                            <details aria-expanded="true" className="massage__detail">
                                <summary className="massage__label">Massage Deep Tissue</summary>
                                <div className="faq__panel-body">
                                    <p className="faq__panel-description">
                                    Le massage Deep Tissue intervient au niveau des structures profondes des muscles et des tissus. Il est idéal pour ceux qui souhaitent un traitement axé sur la relaxation musculaire. Cette technique permet de relâcher les tensions chroniques en exerçant une pression profonde, avec le coude et l'avant-bras, sur les parties contractées. Ce massage du corps tonique est réalisé sur l'ensemble du corps en insistant sur les zones de tension. Il peut accélérer la guérison des blessures et soulager la douleur causée par l'inflammation des tendons, comme la tendinite. Les sportifs et les artistes peuvent aussi suivre les séances de massage Deep Tissue pour les aider dans leurs activités.
                                    </p>
                                </div>
                            </details>
                    
                            <details aria-expanded="false" className="massage__detail">
                                <summary className="massage__label">Aroma Herba Oil</summary>
                                <div className="faq__panel-body">
                                    <p className="faq__panel-description">
                                    Massage thérapeutique ancestral mêlant massothérapie et aromathérapie, le massage Aroma est à la fois un massage californien et un massage suédois. L’origine de cette thérapie gestuelle remonte à plusieurs siècles. Mais, elle revient aujourd’hui en force dans le sillage des médecines douces grâce à ses nombreuses vertus incontestées. Il s’agit d’un massage du corps avec des huiles essentielles destiné à juguler le stress, à se reposer, à se détendre, à dénouer les tensions accumulées chaque jour et à retrouver la vitalité pour un bien-être instantané. Au-delà du plaisir et de la détente, le massage procure également des bienfaits curatifs éprouvés. Avec des techniques faisant appel aux senteurs les plus subtiles, je réalise des pressions sur les zones les plus sujettes aux tensions. Les huiles essentielles aux senteurs uniques inviteront à un voyage unique et laisseront un fini velouté. Rendez-vous au Piras Massage pour vous abandonner. Je vous accueille avec convivialité et sourire, dans un environnement apaisant et aménagé avec goût.
                                    </p>
                                </div>
                            </details>
                    
                            <details aria-expanded="false" className="massage__detail">
                                <summary className="massage__label">Reiki</summary>
                                <div className="faq__panel-body">
                                    <p className="faq__panel-description">
                                    Stress, anxiété, fatigue, trouble du sommeil… Le Reiki a fait ses preuves pour soulager ces tensions désagréables à vivre. Venue tout droit du Japon, cette technique de soin énergétique fait partie de la thérapie naturelle holistique qui mêle art de vivre, philosophie et pratique de développement personnel. Grâce à des techniques d’apposition des mains sur ou légèrement au-dessus du client avec des positions précises, je canalise et transmet une énergie à mon patient afin de le détendre, de réduire son angoisse et son stress. Je libère ainsi son corps et l’esprit de toutes tensions et énergies négatives. Avec cette pratique d’origine japonaise, le corps recharge ses batteries, le mental décroche et le bien-être optimal est ressenti instantanément. À l’instar de la méditation, il s’agit donc d’un soin de rééquilibrage des énergies pour un équilibre corporel et spirituel total. Certifié et expérimenté en soin Reiki, je vous ferai bénéficier de tous les bienfaits de cette pratique dans mon salon Piras Massage à Paris.
                                    </p>
                                </div>
                            </details>

                            <details aria-expanded="false" className="massage__detail">
                                <summary className="massage__label">Thaï Massage</summary>
                                <div className="faq__panel-body">
                                    <p className="faq__panel-description">
                                    Rituel anti-stress très reconnu en Thaïlande, le message thaï est une pratique ancestrale alliant étirements toniques et pressions. Ayant puisé ses origines dans le yoga, le shiatsu et l’ayurvéda, le thaï massage Nuad-bo-rarn a pour but d’établir l’équilibre énergétique perturbé par le rythme de vie au quotidien. Cette technique permet de soulager les muscles tendus, de débloquer les flux énergétiques et de stimuler la circulation sanguine pour un bien-être maximal. En cas d’énorme effort physique ou de fatigue chroniques, c’est la meilleure solution pour vous débarrasser des courbatures et pour vous réconcilier avec votre corps.
                                    </p>
                                </div>
                            </details>
                        
                        </div>
                    </section>
            </main>
        </>
    );
}

export default MassagesPage;
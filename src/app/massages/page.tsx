import '../../../public/styles/massagesPage.css';

function MassagesPage() {
    return (
        <>
            <main className="container__massages">
                <h1 className="title__massages">Mes préstations</h1>
                    <section className="list__massages" aria-label="Massages list">
                        <div className="massages__body">

                            <details aria-expanded="false" className="massage__detail">
                                <summary className="massage__label">Fascia thérapie</summary>
                                <div className="faq__panel-body">
                                    <p className="faq__panel-description">Connectés les uns aux autres, ces tissus forment un réseau reliant le sommet du crâne aux orteils en allant de la superficie de la peau jusqu’à l’intérieure de la cellule.<br />Cette continuité tissulaire permet d’expliquer les répercutions à distance d’un problème. De plus leur étroite relation avec le système nerveux central participe pleinement à l’interconnexion corps/psychisme.<br />Réactifs : leurs tensions excessives permettent d’expliquer l’apparition de douleurs, de troubles fonctionnels parfois non expliqués médicalement ou même un mal être.<br />Ils jouent ainsi un rôle essentiel dans la transmission des forces et dans le contrôle du mouvement, dans la douleur et l’inflammation ou encore dans la conscience du corps et de Soi.<br />Vitaux : membrane élastique et contractile les Fascias s’adaptent, influence et régulent la dynamique musculaire, articulaire, la biologie et le bon fonctionnement de notre corps.<br />La Fasciathérapie est une thérapie manuelle et gestuelle des Fascias. Elle sollicite les capacités d’auto régulation du corps, développe la perception corporelle et l’unité corps/psychisme.<br />Les séances se déroulent par des mouvements lents et des pressions douces, le praticien en Fasciathérapie restaure l’équilibre des Fascias (mobilité, tonus et souplesse) et de l’organisme.<br />Il potentialise ainsi la vitalité de la personne, son bien-être physique et psychique.<br />Pratiqué sur table allongé habillé ou en sous vêtement, sans huiles ni crèmes.<br />Pratiqué par des professionnels de santé du bien être la Fasciathérapie n’est pas remboursé par la sécurité sociale. De plus le praticien en Fasciathérapie effectue un bilan qui ne se substitut en aucun cas à un diagnostic médical.
                                    </p>
                                    <p className="price">Tarif: 50€ la séance de 45min - 3 séances minimum recommandées</p>
                                </div>
                            </details>
                    
                            <details aria-expanded="false" className="massage__detail">
                                <summary className="massage__label">Massage Fascia</summary>
                                <div className="faq__panel-body">
                                    <p className="faq__panel-description">
                                    Le massage Fascias reprend les principes de la Fasciathérapie en allant chercher en plus, une détente plus profonde et une relaxation extrême, par un mouvement très lent (au rythme des Fascias) et très doux concerne tout le corps, le mouvement est ressenti de l’intérieur, jusqu’à ce que tout s’unifie, une réunion des Fascias s’opère et l’homéostasie devient plus fluide et plus cohérente. Un vrai moment pour se retrouver à Soi.<br />Pratiqué sur table avec un sous vêtement jetable fourni par le praticien, des huiles sont utilisés en fonction de chacun.
                                    </p>
                                    <p className="price">Tarif: 100€ la séance de 90min</p>
                                </div>
                            </details>

                            <details aria-expanded="false" className="massage__detail">
                                <summary className="massage__label">Massage & Thérapie Fascia</summary>
                                <div className="faq__panel-body">
                                    <p className="faq__panel-description">
                                    Le Massage + Fascias est en fait un massage d’abord musculaire pour détendre et assouplir l’ensemble des muscles de tout le corps puis, après le massage, la personne est recouverte, et s’en suit une séance de rééquilibration des fascias, par Fasciathérapie dans un mode plus global.<br />Pratiqué sur table avec un sous vêtement jetable fourni par le praticien, des huiles sont utilisés en fonction de chacun.
                                    </p>
                                    <p className="price">Tarif: 100€ la séance de 90min</p>
                                </div>
                            </details>

                            <details aria-expanded="true" className="massage__detail">
                                <summary className="massage__label">Massage Deep Tissue</summary>
                                <div className="faq__panel-body">
                                    <p className="faq__panel-description">
                                    Des experts pensent retrouver des techniques de Deep Tissue dans l’Egypte Ancienne. Son histoire moderne remonte au milieu du XIXe siècle au Canada, et aux Etats-Unis : les techniques de Deep Tissue sont élaborées par divers massothérapeuthes : Dr Ida Rolf, Dr Janet Travell entre autres. Il a été utilisé officiellement pour la première fois aux jeux olympiques de 1900.<br />Le Deep Tissue s'inscrit dans le développement du « mieux-être », et ne cesse de grandir depuis. Très implanté dans les pays Anglo-saxons, il séduit de plus en plus de gens à travers le monde. Le Deep Tissue n'est pas un massage ou un protocole à proprement parlé. C'est un ensemble de techniques qui va intervenir en complément de votre massage suédois afin de vous aider à aller travailler les muscles beaucoup plus en profondeur grâce, par exemples à vos coudes ou poings.<br />De ce fait, les massages que nous retrouvons en Spa et hôtels, vont plus tendre vers un massage relaxant profond plutôt qu'un massage sportif. Il est d'évidence difficile de proposer un véritable travail musculaire en arrivant aux techniques de deep tissue sur le corps entier en 50 minutes. Ces dernières seront plus appropriées à des massages spécifiques.<br />Pour conclure, nous vous proposons ici, un protocole de 1h30 minutes utilisant des techniques de Deep Tissue sur tout le corps
                                    </p>
                                    <p className="price">Tarif: 100€ la séance de 90min</p>
                                </div>
                            </details>
                    
                            <details aria-expanded="false" className="massage__detail">
                                <summary className="massage__label">Aroma Herba Oil</summary>
                                <div className="faq__panel-body">
                                    <p className="faq__panel-description">
                                    L'Aroma Herbal Oil est un massage du corps faisant appel aux senteurs les plus subtiles.<br />Par pressions sur les zones les plus sujettes aux tensions, ce massage associé à diverses huiles essentielles élimine le stress, repose et détend, en évacuant toutes les tensions accumulées chaque jour pour un bien être instantané.<br />Cette technique allie les bienfaits du massage aux bienfaits des huiles essentielles. En fonction des huiles utilisées, l'Aroma Herba Oil peut détendre ou tonifier le corps, et permet de travailler au quotidien sa forme physique.<br />Pratiqué sur table de massage, en sous-vêtements. Le client sera informé sur les huiles essentielles choisies en fonction de leurs bienfait par le masseur.
                                    </p>
                                    <p className="price">Tarif: 100€ la séance de 90min</p>
                                </div>
                            </details>
                    
                            <details aria-expanded="false" className="massage__detail">
                                <summary className="massage__label">Reiki</summary>
                                <div className="faq__panel-body">
                                    <p className="faq__panel-description">
                                    A la fois art de vivre, philosophie et pratique de développement personnel, le Reïki nous vient du Japon.<br />Cette thérapie naturelle canalise et transmet une énergie au client par imposition des mains. Elle a pour but de détendre, réduire l'angoisse et le stress, et libérer corps et esprit de toutes tensions par un rééquilibrage des énergies. On peut comparer cette technique à la méditation, ces deux pratiques ayant le même but: trouver un équilibre corporel et spirituel.<br />Le Reïki se pratique sur une table de massage, habillé confortablement. Aucunes huiles ou crèmes ne sont utilisées.
                                    </p>
                                    <p className="price">Tarif: 100€ la séance de 90min</p>
                                </div>
                            </details>

                            <details aria-expanded="false" className="massage__detail">
                                <summary className="massage__label">Thaï Massage</summary>
                                <div className="faq__panel-body">
                                    <p className="faq__panel-description">
                                    Le Thaï Massage puise ses origines dans le yoga ainsi que l'ayurvéda et nous vient directement de Thaïlande.<br />Lors de cette thérapie corporelle, le praticien guide le client dans une série d'étirements tout en exerçant une pression avec les paumes et les pouces le long des lignes d'énergie du corps et des points d'acupression afin de réaligner et réorienter les énergies.<br />Un traitement corporel complet qui libère la tension musculaire, améliore la circulation, renforce le système immunitaire et rétablit l'équilibrage énergétique.<br />Le Thaï Massage se déroule sur un matelas au sol, le client est habillé confortablement. Aucunes huiles ou crèmes sont utilisées.
                                    </p>
                                    <p className="price">Tarif: 100€ la séance de 90min</p>
                                </div>
                            </details>
                        
                        </div>
                    </section>
            </main>
        </>
    );
}

export default MassagesPage;
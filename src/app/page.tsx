import "../../public/styles/home.css";
import ImgHome from "../data/pictures/massage2.jpg";
import Image from "next/image";
import Link from "next/link";
import database from "../db.json";

function Home() {
  return (
    <>
      <main className="container__home">
        <div className="container">
          <h1 className="title">Cabinet de massage et de soin énergétique</h1>
          <p className="intro">
            D'origine Sarde, et après 17 ans passés à Paris comme masseur
            thérapeute, j'ai pris la décision de revenir vivre en Sardaigne. Je
            propose des massages de bien-être, relaxants et revigorants pour
            l'ensemble des muscles du corps, mais aussi des massages
            thérapeutiques (shiatsu, deep-tissue, reïki, fascia thérapie
            ...) dont chacun de nous a besoin sans toujours le savoir.
            <br />
            Ces massages ont des bienfaits physiologiques sur le corps mais
            également sur l’état psychologique, qui dépend souvent de la période
            que nous traversons, avec des effets durables qui permettent de
            rétablir un équilibre naturel du corps et de l'esprit.
            <br />
            Au cours de mon expérience, j'ai appris à envisager mon métier et
            mes interventions de façon globale et profonde dans la connaissance
            des imbrications multiples des mécanismes du corps humain et de ses
            relations et impacts sur le cerveau. Avant chaque séance, je prends
            le temps de discuter avec mon patient et de toucher quelques points
            précis de son corps afin de pouvoir cerner efficacement la méthode à
            utiliser. Cela a pour effet de répondre aux attentes et besoins de
            chaque patient de façon plus ciblée et personnelle.
          </p>
          <Image
            className="img__home"
            src={ImgHome}
            alt="Espace détente avec pierres et fleures"
          ></Image>
          <article className="informations">
            <section className="cibles">
              <h2 className="title__cibles">
                A qui s'adressent mes soins et massages ?
              </h2>
              <p className="text__cibles">
                Je propose mes services à une gamme variée de clients. Que ce
                soit pour un enfant, une femme ou un homme, vous pouvez me
                contacter pour des séances de massage et de soins énergétiques.
                Ensemble, nous tenterons de trouver l’origine de votre mal et
                les zones les plus touchées. Nous adopterons ensuite un
                protocole de massages ciblés qui éliminera la source de votre
                gêne de manière durable.
              </p>
            </section>

            <section className="prestations">
              <h2 className="title__prestations">
                Une thérapie adaptée pour chaque besoin
              </h2>
              <div>
                <p className="text__prestations">
                  Chaque client est unique et a des besoins spécifiques. Pour un
                  travail de qualité, j’adapte ma thérapie au besoin de chaque
                  client. Pour ce faire, j’utilise diverses techniques que j’ai
                  apprises durant mes formations :
                </p>
                <div className="list__prestations">
                  {database.massages.map((massage) => (
                    <p key={massage.id}>· {massage.name}</p>
                  ))}
                </div>
                <Link className="btn__prestations" href="/massages">
                  <p className="link__prestations">
                    Retrouvez tous les détails ici !
                  </p>
                </Link>
              </div>
            </section>

            <section className="localisation">
              <h2 className="title__googlemap">Où j'exerce ?</h2>
              <p className="text__googlemap">
                J'exerce mon activité dans deux institus différents, tout deux
                situé à Cagliari:
                <br />
                <a href="https://www.maison22cagliari.it/" className="institus">
                  Maison 22 Esthetique
                </a>
                , le lundi ou mardi suivant les rendez-vous.
                <br />
                <a href="http://www.thalassos.it/" className="institus">
                  Thalassos
                </a>
                , le vendredi après-midi et le samedi matin ou après-midi
                suivant les rendez-vous.
              </p>
              <div className="googlemap">
                <iframe
                  className="map"
                  src="https://storage.googleapis.com/maps-solutions-35cavkcvgj/locator-plus/t8no/locator-plus.html"
                  loading="lazy"
                ></iframe>
              </div>
            </section>
          </article>
        </div>
      </main>
    </>
  );
}

export default Home;

import "../../../public/styles/degree.css";
import IconFlower from "../../../public/data/pictures/icons8-flower-50.png";
import database from "../../db.json";

import Image from "next/image";
function Degree() {
  return (
    <>
      <main className="container__degree">
        <h1 className="title__degree">Diplômes et qualifications</h1>
        <article className="degrees">
          {database.ecoles.map((ecole) => (
            <section className="degree" key={ecole.id}>
              <Image
                className="icon__flower"
                src={IconFlower}
                alt="Icône d'une fleur"
              ></Image>
              <p className="detail__degree">
                {ecole.degree}
                <br />
                <span className="school">{ecole.school}</span>
              </p>
            </section>
          ))}
        </article>
      </main>
    </>
  );
}

export default Degree;

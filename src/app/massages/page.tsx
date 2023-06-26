"use client";

import "../../../public/styles/massagesPage.css";
import database from "../../db.json";

function MassagesPage() {
  //   console.log(database);
  return (
    <>
      <main className="container__massages">
        <h1 className="title__massages">Mes préstations</h1>
        <section className="list__massages" aria-label="Massages list">
          <div className="massages__body">
            {database.massages.map((massage: any) => (
              <details className="massage__detail" key={massage.id}>
                <summary className="massage__label">{massage.name}</summary>
                <div className="faq__panel-body">
                  <p className="faq__panel-description">
                    {massage.description}
                  </p>
                  <p className="price">{massage.price}</p>
                </div>
              </details>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}

export default MassagesPage;

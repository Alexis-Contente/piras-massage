import ImgContact from "../../../public/data/pictures/massage3.jpeg";
import IconFB from "../../../public/data/pictures/icons8-facebook-64.png";
import IconInsta from "../../../public/data/pictures/icons8-instagram-64.png";
import "../../../public/styles/contact.css";

import Image from "next/image";

function Contact() {
  return (
    <>
      <main className="container__contact">
        <Image
          className="img__contact"
          src={ImgContact}
          alt="Femme se faisant masser le dos"
        ></Image>
        <div className="reseaux">
          <h1 className="title__contact">Me contacter</h1>
          <p className="para__contact">
            Vous avez la possibilité de me joindre, si vous souhaitez avoir plus
            d'information sur mes prestation ou pour prendre directement
            rendez-vous.
          </p>
          <a className="contact__tel" href="tel:+33628602076">
            Cliquez ici pour me joindre au +33 6 28 60 20 76
          </a>
          <a
            className="contact__mail"
            href="mailto:dvdpiras@gmail.com?subject=HTML link"
          >
            Cliquez ici pour m'envoyer un e-mail
          </a>

          <h2 className="follow">Suivez-moi sur mes réseaux</h2>

          <div className="icon__social">
            <a
              href="https://www.facebook.com/groups/954153091395549"
              target="_blank"
            >
              <Image
                className="icon__fb"
                src={IconFB}
                alt="Icône du réseau social Facebook"
              ></Image>
            </a>

            <a href="https://www.instagram.com/piras_massaggi/" target="_blank">
              <Image
                className="icon__insta"
                src={IconInsta}
                alt="Icône du réseau social Instagram"
              ></Image>
            </a>
          </div>
        </div>
      </main>
    </>
  );
}

export default Contact;

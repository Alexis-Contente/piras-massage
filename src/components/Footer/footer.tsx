import './footer.css';

function Footer() {
    return (
        <footer className="footer">

          <ul className="menu">
            <li className="menu__item"><a className="menu__link" href="#">A propos</a></li>
            <li className="menu__item"><a className="menu__link" href="#">Team</a></li>
          </ul>
          
          <p className="copyright">&copy;2023 Alexis Contente | All Rights Reserved</p>
          
        </footer>
  );
}

export default Footer;
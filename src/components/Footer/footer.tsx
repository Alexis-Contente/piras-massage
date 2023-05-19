import Link from 'next/link';
import './footer.css';

function Footer() {
    return (
        <footer className="footer">

          <ul className="menu">
            <li className="menu__item"><Link className="menu__link" href="/about">A propos</Link></li>
            <li className="menu__item"><Link className="menu__link" href="/team">Team</Link></li>
          </ul>
          
          <p className="copyright">&copy;2023 Alexis Contente | All Rights Reserved</p>
          
        </footer>
  );
}

export default Footer;
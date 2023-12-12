import "@/styles/components/_footer.scss";

import Image from "next/image";
import Link from "next/link";

import Logo from "../assets/spotlight-logo.svg";
import FacebookIcon from "../assets/icons/facebook.svg";
import InstagramIcon from "../assets/icons/instagram.svg";
import BehanceIcon from "../assets/icons/behance.svg";

const footerItems = [
  { id: 1, title: "Home", link: "/home-page" },
  { id: 2, title: "Recommended events", link: "/recommendations" },
  { id: 3, title: "Favourite events" },
  { id: 4, title: "Settings" },
  { id: 5, title: "Help" },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <Image className="footer__logo" src={Logo} alt="Museve Logo" />

        <section className="footer__items">
          {footerItems.map((item) => (
            <Link href={`${item.link}`} key={item.id}>
              <span>{item.title}</span>
            </Link>
          ))}
          <hr className="footer__line" />
          <span className="footer__company">2023, Citric Labs</span>
          <div className="footer__social">
            <Image className="icon" src={FacebookIcon} alt="Facebook Icon" />
            <Image className="icon" src={InstagramIcon} alt="Instagram Icon" />
            <Image className="icon" src={BehanceIcon} alt="Behance Icon" />
          </div>
        </section>
      </div>
    </footer>
  );
}

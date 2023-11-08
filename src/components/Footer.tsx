import "@/styles/components/_footer.scss";
import Logo from "../assets/museve-logo-white.svg";
import Image from "next/image";
import FacebookIcon from "../assets/facebook.svg";
import InstagramIcon from "../assets/instagram.svg";
import BehanceIcon from "../assets/behance.svg";

const footerItems = [
  { id: 1, title: "Recommendations" },
  { id: 2, title: "Friends Community" },
  { id: 3, title: "Explore New Events" },
];

export default function Footer() {
  return (
    <footer className="footer">
      <Image className="footer__logo" src={Logo} alt="Museve Logo" />

      <section className="footer__items">
        {footerItems.map((item) => (
          <span className="" key={item.id}>
            {item.title}
          </span>
        ))}
        <hr className="footer__line" />
        <span className="footer__company">2023, Citric Labs</span>
        <div className="footer__social">
          <Image className="icon" src={FacebookIcon} alt="Facebook Icon" />
          <Image className="icon" src={InstagramIcon} alt="Instagram Icon" />
          <Image className="icon" src={BehanceIcon} alt="Behance Icon" />
        </div>
      </section>
    </footer>
  );
}

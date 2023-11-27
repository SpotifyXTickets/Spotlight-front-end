import "@/styles/components/_navbar.scss";
import Image from "next/image";
import MuseveLogo from "../assets/museve-logo-white.svg";
import HamburgerMenu from "@/components/HamburgerMenu";

export default function NavBar() {
  return (
    <nav className="navbar">
      <a href="">
        <Image className="navbar__logo" src={MuseveLogo} alt="Museve Logo" />
      </a>
      <HamburgerMenu />
    </nav>
  );
}

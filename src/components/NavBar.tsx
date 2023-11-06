import "@/styles/components/_navbar.scss";
import Image from "next/image";
import MuseveLogo from "../assets/museve-logo.svg";
import HamburgerMenu from "@/components/HamburgerMenu";

export default function NavBar() {
  return (
    <nav className="navbar">
      <Image className="navbar__logo" src={MuseveLogo} alt="Museve Logo" />
      {/* <Image className="navbar__menu" src={HamburgerMenu} alt="HamburgerMenu" /> */}
      <HamburgerMenu />
    </nav>
  );
}

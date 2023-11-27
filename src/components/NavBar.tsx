import "@/styles/components/_navbar.scss";
import Image from "next/image";
import MuseveLogo from "../assets/museve-logo-white.svg";
import HamburgerMenu from "@/components/HamburgerMenu";
import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="navbar">
      <Link href="/home-page">
        <Image className="navbar__logo" src={MuseveLogo} alt="Museve Logo" />
      </Link>
      <HamburgerMenu />
    </nav>
  );
}

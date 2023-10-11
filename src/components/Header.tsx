import "@/styles/components/_header.scss";
import Image from "next/image";
import SettingsIcon from "../assets/settings-icon.svg";
import TestIcon from "../app/favicon.ico";

export default function Header() {
  return (
    <header className="header">
      <div className="header__content">
        <div className="header__left-wrapper">
          <a className="header__logo" href="" title="">
            <Image className="header__icon" src={TestIcon} alt="" />
          </a>
          <nav className="header__navigation">
            <a>Nav item 1</a>
            <a>Nav item 2</a>
            <a>Nav item 3</a>
          </nav>
        </div>
        <div className="header__right-wrapper">
          <Image className="header__icon" src={TestIcon} alt="" />
          <Image
            className="header__settings"
            src={SettingsIcon}
            alt="settings svg"
          />
        </div>
      </div>
    </header>
  );
}

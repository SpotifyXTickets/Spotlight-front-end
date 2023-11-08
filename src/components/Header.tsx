import { UserContext } from "@/providers/UserProvider";
import "@/styles/components/_header.scss";
import Image from "next/image";
import { useContext } from "react";
import { useCookies } from "react-cookie";
import TestIcon from "../app/favicon.ico";
import SettingsIcon from "../assets/settings-icon.svg";

export default function Header() {
  const { user } = useContext(UserContext);

  let userImageUrl = "";
  if (user) {
    try {
      userImageUrl = user.images
        ? user.images.sort((a, b) => {
            return a.height < b.height ? -1 : 1;
          })[0].url
        : "https://picsum.photos/64";
    } catch (e) {
      userImageUrl = "https://picsum.photos/64";
    }
  }

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
          {user ? (
            <>
              <div className="header__user">
                <Image src={userImageUrl} height={45} width={45} alt="" />
              </div>
              <div className="header__settings">{user.display_name}</div>
            </>
          ) : (
            <>
              {" "}
              <Image className="w-10" src={TestIcon} alt="profile picture" />
              <Image className="w-6" src={SettingsIcon} alt="settings svg" />
            </>
          )}
        </div>
      </div>
    </header>
  );
}

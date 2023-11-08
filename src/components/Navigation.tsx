import Image from "next/image";
// Imported a random icon in order to not give errors for the placeholders
import TestIcon from "../app/favicon.ico";
import SettingsIcon from "../assets/settings-icon.svg";
import { UserContext } from "@/providers/UserProvider";
import { useContext } from "react";

export default function Navigation() {
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
    <header className="fixed top-0 left-0 h-24 flex w-full justify-between items-center px-28 bg-slate-50 z-99">
      <nav className="flex justify-between items-center gap-12">
        <span className="uppercase text-2xl tracking-tight text-slate-100 bg-gray-600 p-2 rounded-lg">
          Citric labs
        </span>
        <ul className="flex items-center gap-6 list-none font-medium">
          {/* Repetition going to be replaced my mapping the actual navigation items */}
          <li>
            <a className="cursor-pointer">Tab</a>
          </li>
          <li>
            <a className="cursor-pointer">Tab</a>
          </li>
          <li>
            <a className="cursor-pointer">Tab</a>
          </li>
          <li>
            <a className="cursor-pointer">Tab</a>
          </li>
        </ul>
      </nav>
      <div className="flex items-center gap-6">
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
    </header>
  );
}

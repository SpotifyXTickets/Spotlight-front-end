import { UserContext } from "@/providers/UserProvider";
import "@/styles/components/_header.scss";
import Image from "next/image";
import { useContext } from "react";
import { useCookies } from "react-cookie";

export default function Header() {
  const { user } = useContext(UserContext);
  console.log(user);
  return (
    <header className="header">
      <div className="header__content">
        <div className="header__left-wrapper">
          <a className="header__logo" href="" title="">
            <img src="https://picsum.photos/36" alt="" />
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
                <Image
                  src={
                    user.images
                      ? user.images.sort((a, b) => {
                          return a.height < b.height ? -1 : 1;
                        })[0].url
                      : "https://picsum.photos/64"
                  }
                  height={45}
                  width={45}
                  alt=""
                />
              </div>
              <div className="header__settings">{user.display_name}</div>
            </>
          ) : (
            <>Authorize Spotify</>
          )}
        </div>
      </div>
    </header>
  );
}

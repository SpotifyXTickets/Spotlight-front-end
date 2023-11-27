import "../app/globals.scss";
import "../styles/pages/_login.scss";

import { useState, useEffect, Fragment } from "react";
import Image from "next/image";
import Link from "next/link";

import Button from "@/components/Button";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

import SpotifyIcon from "@/assets/icons/spotify-icon.svg";
import ArrowDown from "@/assets/icons/login-arrow.svg";
import PhoneIcon from "@/assets/icons/phone.svg";
import NoteIcon from "@/assets/icons/note.svg";
import TicketIcon from "@/assets/icons/ticket-login.svg";

const processData = [
  {
    id: 1,
    icon: PhoneIcon,
    title: "Sync Your Spotify Account",
    description:
      "Horem ipsum dolor sit fon gid namet,consectetur adipiscing elit.",
  },

  {
    id: 2,
    icon: NoteIcon,
    title: "Explore Recommended Events",
    description:
      "Horem ipsum dolor sit fon gid namet,consectetur adipiscing elit.",
  },

  {
    id: 2,
    icon: TicketIcon,
    title: "Buy Tickets Through Our Partner",
    description:
      "Horem ipsum dolor sit fon gid namet,consectetur adipiscing elit.",
  },
];

export default function Login() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 0 ? setIsVisible(false) : setIsVisible(true);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="login">
      <NavBar />
      <main className="login__background">
        <div className="login__wrapper">
          <h1 className="login__header">
            Welcome <br /> to Museve
          </h1>
          <p className="login__text">
            Welcome to the world of music events that was created personally for
            you
          </p>
          <Link href="/select-playlists">
            <Button
              text="text-[#fbf9f9]"
              background="bg-[#6e3aff]"
              icon={SpotifyIcon}
            >
              Start with Spotify
            </Button>
          </Link>

          <div
            className={`login__explore-more ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            <h4>Explore more</h4>
            <Image
              className="login__explore-more-icon"
              src={ArrowDown}
              alt="Arrow down"
            />
          </div>
        </div>

        <section className="login__process">
          <h2 className="login__process-header">
            Music Events Only
            <br /> For You
          </h2>

          {processData.map((item) => (
            <Fragment key={item.id}>
              <div className="login__process-icon-wrapper">
                <Image src={item.icon} alt={item.icon} />
              </div>
              <h4 className="login__process-step-title">{item.title}</h4>
              <p className="login__process-step-text">{item.description}</p>
            </Fragment>
          ))}
        </section>
      </main>
      <div className="pt-[60rem] pb-0.5">
        <Footer />
      </div>
    </section>
  );
}

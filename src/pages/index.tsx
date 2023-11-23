import "../app/globals.scss";
import "../styles/pages/_login.scss";

import Link from "next/link";

import SpotifyIcon from "../assets/spotify-icon.svg";
import Button from "@/components/Button";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export default function Login() {
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
        </div>
      </main>
      <div className="pb-0.5">
        <Footer />
      </div>
    </section>
  );
}

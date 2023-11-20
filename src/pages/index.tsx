import "../app/globals.scss";
import "../styles/pages/_login.scss";

import Image from "next/image";
import Link from "next/link";

import LoginImage from "../assets/login-image.png";
import SpotifyIcon from "../assets/spotify-icon.svg";
import Button from "@/components/Button";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export default function Login() {
  return (
    <section>
      <NavBar />
      <main className="login">
        <Image className="login__image" src={LoginImage} alt="Login Image" />
        <h1 className="login__header">
          Best way to find the perfect music event{" "}
        </h1>
        <p className="login__text">
          Welcome to the world of music events that was created for you
        </p>
        <Link href="/select-playlists">
          <Button
            text="text-[#fbf9f9]"
            background="bg-[#6e3aff]"
            icon={SpotifyIcon}
          >
            Continue with Spotify
          </Button>
        </Link>
      </main>
      <Footer />
    </section>
  );
}

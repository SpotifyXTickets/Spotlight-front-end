import "../styles/pages/_login.scss";

import Image from "next/image";
import LoginImage from "../assets/login-image.png";
import SpotifyIcon from "../assets/spotify-icon.svg";
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
        <button className="login__button">
          <Image
            className="login__spotify-icon"
            src={SpotifyIcon}
            alt="Spotify Icon"
          />
          Continue with Spotify
        </button>
      </main>
      <Footer />
    </section>
  );
}
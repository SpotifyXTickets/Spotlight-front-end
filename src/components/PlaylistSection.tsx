import "../styles/components/_playlist-section.scss";

import Image from "next/image";
import IndieRock from "../assets/IndieRock.jpeg";
import JazzEvening from "../assets/JazzEvening.jpeg";
import Summer from "../assets/Summer.png";

const playlists = [
  {
    id: 1,
    title: "Indie Rock",
    playlistImage: IndieRock,
    songs: "50 songs",
    artists: "The Weeknd, Lana Del Rey...",
  },
  {
    id: 2,
    title: "Jazz Evening",
    playlistImage: JazzEvening,
    songs: "32 songs",
    artists: "The Weeknd, Lana Del Rey...",
  },
  {
    id: 3,
    title: "Summer 2021",
    playlistImage: Summer,
    songs: "41 songs",
    artists: "The Weeknd, Lana Del Rey...",
  },
  {
    id: 4,
    title: "Indie Rock",
    playlistImage: IndieRock,
    songs: "50 songs",
    artists: "The Weeknd, Lana Del Rey...",
  },
  {
    id: 5,
    title: "Jazz Evening",
    playlistImage: JazzEvening,
    songs: "32 songs",
    artists: "The Weeknd, Lana Del Rey...",
  },
  {
    id: 6,
    title: "Summer 2021",
    playlistImage: Summer,
    songs: "41 songs",
    artists: "The Weeknd, Lana Del Rey...",
  },
];

export default function PlaylistSection() {
  return (
    <section className="playlist-section">
      {playlists.map((item) => (
        <div className="playlist-section__card" key={item.id}>
          <Image
            className="playlist-section__image"
            src={item.playlistImage}
            alt={item.title}
          />

          <div className="playlist-section__info">
            <div className="playlist-section__checkbox">
              <input type="checkbox" value={item.title}></input>
              <label>{item.title}</label>
            </div>
            <span>{item.songs}</span>
            <span>{item.artists}</span>
          </div>
        </div>
      ))}
    </section>
  );
}
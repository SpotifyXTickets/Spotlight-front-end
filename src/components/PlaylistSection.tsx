import "../styles/components/_playlist-section.scss";

import Image from "next/image";
import IndieRock from "../assets/IndieRock.jpeg";
import JazzEvening from "../assets/JazzEvening.jpeg";
import Summer from "../assets/Summer.png";
import { PlaylistType } from "@/types/types";

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

export default function PlaylistSection(props: { playlist: PlaylistType }) {
  console.log(props.playlist);
  return (
    <section className="playlist-section">
      {props.playlist.items.map((item) => (
        <label
          className="playlist-section__card"
          key={item.id}
          htmlFor={"playlist-section__checkbox_" + item.id}
        >
          <div className="playlist-section__image_holder">
            <Image
              className="playlist-section__image"
              src={item.images[0] ? item.images[0].url : ""}
              alt={item.name}
              fill
            />
          </div>

          <div className="playlist-section__info">
            <div className="playlist-section__checkbox">
              <input
                type="checkbox"
                value={item.name}
                id={"playlist-section__checkbox_" + item.id}
              ></input>
              <label>{item.name}</label>
            </div>
            <span>{item.tracks.total} songs</span>
            {/* <span>{item}</span> */}
          </div>
        </label>
      ))}
    </section>
  );
}

import "../styles/components/_playlist-section.scss";

import { useState } from "react";

import Image from "next/image";
import IndieRock from "../assets/IndieRock.jpeg";
import JazzEvening from "../assets/JazzEvening.jpeg";
import Summer from "../assets/Summer.png";

const playlists = [
  {
    id: 1,
    title: "Testing a longer title in order not to break",
    playlistImage: IndieRock,
    isChecked: false,
  },
  {
    id: 2,
    title: "Jazz Evening",
    playlistImage: JazzEvening,
    isChecked: false,
  },
  {
    id: 3,
    title: "Summer 2021",
    playlistImage: Summer,
    isChecked: false,
  },
  {
    id: 4,
    title: "Indie Rock",
    playlistImage: IndieRock,
    isChecked: false,
  },
  {
    id: 5,
    title: "Jazz Evening",
    playlistImage: JazzEvening,
    isChecked: false,
  },
  {
    id: 6,
    title: "Summer 2021",
    playlistImage: Summer,
    isChecked: false,
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

          <div className="playlist-section__checkbox">
            <input
              className="playlist-section__input"
              type="checkbox"
              value={item.title}
            />
            <label className="playlist-section__playlist-title">
              {item.title}
            </label>
          </div>
        </div>
      ))}
    </section>
  );
}

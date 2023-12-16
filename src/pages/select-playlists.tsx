import "../app/globals.scss";
import "../styles/pages/_select-playlists.scss";

import { useState } from "react";
import Link from "next/link";

import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import PlaylistSection from "@/components/PlaylistSection";
import SearchBar from "@/components/SearchBar";
import Button from "@/components/Button";

import IndieRock from "@/assets/IndieRock.jpeg";
import JazzEvening from "@/assets/JazzEvening.jpeg";
import Summer from "@/assets/Summer.png";

const playlists = [
  {
    id: 1,
    title: "Testing a longer title in order not to break",
    playlistImage: IndieRock,
  },
  {
    id: 2,
    title: "Jazz Evening",
    playlistImage: JazzEvening,
  },
  {
    id: 3,
    title: "Summer 2021",
    playlistImage: Summer,
  },
  {
    id: 4,
    title: "Indie Rock",
    playlistImage: IndieRock,
  },
  {
    id: 5,
    title: "Jazz Evening",
    playlistImage: JazzEvening,
  },
  {
    id: 6,
    title: "Summer 2021",
    playlistImage: Summer,
  },
];

export default function SelectPlaylists() {
  const [selectedPlaylists, setSelectedPlaylists] = useState([] as any);

  const handlePlaylistClick = (id: any) => {
    if (selectedPlaylists.includes(id)) {
      setSelectedPlaylists(
        selectedPlaylists.filter((playlistId: any) => playlistId !== id)
      );
    } else {
      setSelectedPlaylists([...selectedPlaylists, id]);
    }
  };

  const handleSelectAll = () => {
    if (selectedPlaylists.length > 0) {
      setSelectedPlaylists([]);
    } else {
      setSelectedPlaylists(playlists.map((playlist) => playlist.id));
    }
  };

  return (
    <section className="select-playlists__section">
      <NavBar />
      <main className="select-playlists">
        <h2 className="select-playlists__header">Let’s get started</h2>
        <p className="select-playlists__info">
          Select playlists for more personalised event recommendations.
        </p>
        <SearchBar placeholder="Search for playlists" />

        <button
          className="select-playlists__all-button"
          onClick={handleSelectAll}
        >
          {selectedPlaylists.length > 0
            ? "Clear Selection"
            : "Select All Playlists"}
        </button>

        <PlaylistSection
          playlists={playlists}
          selectedPlaylists={selectedPlaylists}
          handlePlaylistClick={handlePlaylistClick}
        />
      </main>
      <section className="select-playlists__buttons">
        <Link className="select-playlists__link" href="/home-page">
          <Button
            text="text-[#6e3aff]"
            background="bg-dark"
            border="border"
            borderColor="border-[#6e3aff]"
          >
            Skip This Step
          </Button>
        </Link>
        <Link className="select-playlists__link" href="/home-page">
          <Button text="text-[#fbf9f9]" background="bg-[#6e3aff]">
            Confirm Playlists
          </Button>
        </Link>
      </section>
      <div className="pb-20">
        <Footer />
      </div>
    </section>
  );
}

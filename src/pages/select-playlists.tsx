import "../app/globals.scss";
import "../styles/pages/_select-playlists.scss";

import Link from "next/link";

import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import PlaylistSection from "@/components/PlaylistSection";
import SearchBar from "@/components/SearchBar";
import Button from "@/components/Button";

export default function SelectPlaylists() {
  return (
    <section className="select-playlists__section">
      <NavBar />
      <main className="select-playlists">
        <h2 className="select-playlists__header">Let’s Start</h2>
        <p className="select-playlists__info">
          Choose playlists for more personalised recommendations for music
          events.
        </p>
        <SearchBar />
        <button>Select All Playlists</button>
        <PlaylistSection />
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
      <Footer />
    </section>
  );
}

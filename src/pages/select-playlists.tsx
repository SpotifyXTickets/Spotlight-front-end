import "../styles/pages/_select-playlists.scss";

import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import PlaylistSection from "@/components/PlaylistSection";

export default function SelectPlaylists() {
  return (
    <section>
      <NavBar />
      <main className="playlist-section">
        <PlaylistSection />
      </main>
      <Footer />
    </section>
  );
}

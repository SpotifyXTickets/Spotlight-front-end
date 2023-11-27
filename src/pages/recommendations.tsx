import "../app/globals.scss";
import "../styles/pages/_recommendations-selection.scss";

import NavBar from "@/components/NavBar";
import SearchBar from "@/components/SearchBar";
import Categories from "@/components/Categories";
import EventsSection from "@/components/EventsSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <section className="recommendations-section">
      <NavBar />
      <main className="recommendations-selection">
        <h1 className="recommendations-selection__title">Best For You</h1>
        <SearchBar placeholder="Search for playlists" />
        <Categories />
        <EventsSection title="Pop Music" />
        <EventsSection title="R&B Music" />
      </main>
      <Footer />
    </section>
  );
}

import "../styles/pages/_recommendations-selection.scss";

import NavBar from "@/components/NavBar";
import SearchBar from "@/components/SearchBar";
import Categories from "@/components/Categories";
import EventsSection from "@/components/EventsSection";

export default function Home() {
  return (
    <section className="recommendations-selection__wrapper">
      <NavBar />
      <main className="recommendations-selection">
        <SearchBar />
        <Categories />
        <EventsSection title="Pop Music" />
        <EventsSection title="R&B Music" />
      </main>
    </section>
  );
}

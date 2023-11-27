import "../app/globals.scss";
import "../styles/pages/_home-page.scss";

import Link from "next/link";
import NavBar from "@/components/NavBar";
import SearchBar from "@/components/SearchBar";
import Footer from "@/components/Footer";
import EventsSectionDrag from "@/components/EventsSectionDrag";

export default function HomePage() {
  return (
    <section>
      <NavBar />
      <main className="home-page">
        <div className="home-page__container">
          <h1 className="home-page__title">Home</h1>
          <div className="home-page__searchbar-wrapper">
            <SearchBar placeholder="Search for playlists" />
          </div>
          <section className="home-page__draggable-events">
            <div className="home-page__section">
              <div className="home-page__section-title-wrapper">
                <h2 className="home-page__section-title">Recommended events</h2>
                <Link
                  className="home-page__section-see-all"
                  href="/recommendations"
                >
                  See All
                </Link>
              </div>
              <p className="home-page__section-subtitle">
                Based on your music taste
              </p>
            </div>
            <EventsSectionDrag />
          </section>
          <section className="home-page__draggable-events">
            <div className="home-page__section">
              <div className="home-page__section-title-wrapper">
                <h2 className="home-page__section-title">
                  Events of favourite artists
                </h2>
                <Link
                  className="home-page__section-see-all"
                  href="/recommendations"
                >
                  See All
                </Link>
              </div>
              <p className="home-page__section-subtitle">
                Select artists to see all their concerts
              </p>
            </div>
            <EventsSectionDrag concertCards={true} />
          </section>
        </div>
        <Footer />
      </main>
    </section>
  );
}

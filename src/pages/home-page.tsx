import "../app/globals.scss";
import "../styles/pages/_home-page.scss";

import Link from "next/link";
import NavBar from "@/components/NavBar";
import SearchBar from "@/components/SearchBar";
import Footer from "@/components/Footer";
import EventsSectionDrag from "@/components/EventsSectionDrag";
import StackedImageRow from "@/components/StackedImageRow";
import Button from "@/components/Button";

export default function HomePage() {
  return (
    <section>
      <NavBar />
      <main className="home-page">
        <div className="home-page__container">
          <h1 className="home-page__title">Home</h1>
          <div className="home-page__searchbar-wrapper">
            <SearchBar />
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
          <section className="home-page__flow">
            <h2 className="home-page__section-title-description">
              Unlock Flow by selcting all favorites playlist for improved
              recomendations
            </h2>
            <div className="home-page__stacked-image-row">
              <StackedImageRow />
            </div>
            <Link href="/select-playlists">
              <Button text="text-[#fbf9f9]" background="bg-[#6e3aff]">
                Select playlists
              </Button>
            </Link>
          </section>
          <section className="home-page__draggable-events">
            <div className="home-page__section">
              <div className="home-page__section-title-wrapper">
                <h2 className="home-page__section-title">100% for you</h2>
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
                <h2 className="home-page__section-title">Favourite genres</h2>
              </div>
              <p className="home-page__section-subtitle">
                Based on your music taste
              </p>
              <div className="home-page__button-grid">
                <Button text="text-[#fbf9f9]" background="bg-[#3448FC]">
                  Rock
                </Button>
                <Button text="text-[#fbf9f9]" background="bg-[#2E7C8F]">
                  Pop
                </Button>
                <Button text="text-[#fbf9f9]" background="bg-[#A238FF]">
                  Jazz
                </Button>
                <Button text="text-[#fbf9f9]" background="bg-[#4D0193]">
                  Indie
                </Button>
                <Button text="text-[#fbf9f9]" background="bg-[#C01FC2]">
                  Hip-Hop
                </Button>
                <Button text="text-[#fbf9f9]" background="bg-[#FF663C]">
                  Classical
                </Button>
                <Button text="text-[#fbf9f9]" background="bg-[#8F931D]">
                  Electronic
                </Button>
                <Button text="text-[#fbf9f9]" background="bg-[#FF3D3D]">
                  Metal
                </Button>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </section>
  );
}

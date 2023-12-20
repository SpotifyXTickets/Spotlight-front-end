import "@/app/globals.scss";
import "@/styles/pages/_home-page.scss";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

import NavBar from "@/components/NavBar";
import SearchBar from "@/components/SearchBar";
import Footer from "@/components/Footer";
import EventsSectionDrag from "@/components/EventsSectionDrag";
import EventsSection from "@/components/EventsSection";
import StackedImageRow from "@/components/StackedImageRow";
import Button from "@/components/Button";

import percentageIcon from "@/assets/icons/percentage.svg";
import noteIcon from "@/assets/icons/singleNote.svg";
import ArtistList from "@/components/ArtistList";

export default function HomePage() {
  const [isOnboardingVisible, setOnboardingVisible] = useState(true);

  const handleCloseOnboarding = () => {
    setOnboardingVisible(false);
  };

  return (
    <section className="bg-dark">
      <NavBar />
      <main className={`home-page ${isOnboardingVisible ? "opacity-30" : ""}`}>
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

              <EventsSection title="" />
            </div>
          </section>

          <section className="home-page__draggable-events">
            <div className="home-page__section">
              <div className="home-page__section-title-wrapper">
                <h2 className="home-page__section-title">Artists</h2>
                <Link
                  className="home-page__section-see-all"
                  href="/recommendations"
                >
                  See All
                </Link>
              </div>
              <p className="home-page__section-subtitle">
                Select artists to see all their concerts.
              </p>
            </div>
            <ArtistList />
            {/* <EventsSectionDrag concertCards={true} /> */}
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
        </div>
        <Footer />
      </main>

      {isOnboardingVisible && (
        <OnboardingWindow
          onClose={handleCloseOnboarding}
          icon={percentageIcon}
          description="Let’s explore your recommended events! The percentage shows the match
        to your taste profile."
        />
      )}

      {/* {isOnboardingVisible && (
        <OnboardingWindow
          onClose={handleCloseOnboarding}
          icon={noteIcon}
          description="Explore your favourite artists to see all their upcoming events."
        />
      )} */}
    </section>
  );
}

function OnboardingWindow({ onClose, icon, description }: any) {
  return (
    <div className="home-page__onboarding-window">
      <div className="home-page__onboarding-window__content">
        <Image className="mt-1" src={icon} alt="Music icon" />
        <p className="text-white">{description}</p>
      </div>
      <Button text="text-[#fbf9f9]" background="bg-[#6e3aff]" onClick={onClose}>
        Next
      </Button>
    </div>
  );
}

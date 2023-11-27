import "../app/globals.scss";
import "../styles/pages/_artist-page.scss";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import Beyonce from "@/assets/BeyonceDrag.png";
import HeartIcon from "@/assets/icons/heart.svg";
import FullHeartIcon from "@/assets/icons/heart-red.svg";
import DateIcon from "@/assets/icons/date.svg";
import LocationIcon from "@/assets/icons/location.svg";
import TicketIcon from "@/assets/icons/ticket.svg";

import NavBar from "@/components/NavBar";
import Button from "@/components/Button";
import Footer from "@/components/Footer";
import EventsSectionDrag from "@/components/EventsSectionDrag";

const data = [
  {
    id: 1,
    date: "15 November 2023, Wed",
    time: "19:00",
    location: "Johan Cruijff ArenA, Amsterdam",
    price: "From €200",
  },
];

export default function ArtistPage() {
  const [isHeartFilled, setIsHeartFilled] = useState(false);

  const toggleHeart = () => setIsHeartFilled(!isHeartFilled);

  return (
    <section>
      <NavBar />
      <main className="artist-page">
        <div className="artist-page__container">
          <div className="artist-page__image-wrapper">
            <Image
              className="artist-page__image"
              src={Beyonce}
              alt="Artist image"
            />
          </div>
          <section className="artist-page__info-section">
            <div className="artist-page__info-section-title">
              <h2>Beyonce</h2>
              <Image
                className="artist-page__info-section-icon"
                onClick={toggleHeart}
                src={!isHeartFilled ? HeartIcon : FullHeartIcon}
                alt="Heart icon"
              />
            </div>

            {/* Can be optimised to avoid code repetition, but would first consultate to know how the data is going to be fetched  */}

            {data.map((item) => (
              <>
                <div className="artist-page__info-section-event-info">
                  <Image src={DateIcon} alt="Date icon" />
                  <span>
                    {item.date} {item.time}
                  </span>
                </div>
                <div className="artist-page__info-section-event-info">
                  <Image src={LocationIcon} alt="Location icon" />
                  <span>{item.location}</span>
                </div>
                <div className="artist-page__info-section-event-info">
                  <Image src={TicketIcon} alt="Ticket icon" />
                  <span>{item.price}</span>
                </div>
              </>
            ))}

            <hr className="artist-page__info-section-line" />

            <h4 className="artist-page__info-section-description">
              About Event
            </h4>
            <p>
              Embark on Beyoncé&apos;s Renaissance Tour—a unique blend of
              timeless elegance and modern artistry. Witness a cultural revival
              through opulent costumes and groundbreaking performances. Secure
              your tickets for a night of musical mastery that bridges the past
              and present in true Beyoncé style!
            </p>

            <iframe
              className="my-10"
              src="https://open.spotify.com/embed/artist/6vWDO969PvNqNYHIOW5v0m?utm_source=generator&theme=0"
              width="100%"
              height="352"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </section>

          <section className="artist-page__draggable-events">
            <div className="artist-page__section">
              <div className="artist-page__section-title-wrapper">
                <h2 className="artist-page__section-title">
                  Recommended events
                </h2>
                <Link
                  className="artist-page__section-see-all"
                  href="/recommendations"
                >
                  See All
                </Link>
              </div>
              <p className="artist-page__section-subtitle">
                Based on your music taste
              </p>
            </div>
            <EventsSectionDrag />
          </section>
        </div>
      </main>

      <section className="artist-page__button">
        <Button text="text-[#fbf9f9]" background="bg-[#6e3aff]">
          Buy Tickets
        </Button>
      </section>

      <div className="pb-20">
        <Footer />
      </div>
    </section>
  );
}

import "@/app/globals.scss";
import "@/styles/pages/_event-page.scss";

import { Fragment, useState } from "react";
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
import ArtistEvents from "@/components/ArtistEvents";

const data = [
  {
    id: 1,
    startDate: "15 November 2023, Wed",
    startTime: "19:00",
    endDate: "15 November 2023, Thu",
    endTime: "00:00",
    location: "Johan Cruijff ArenA, Amsterdam",
    price: "From €200",
  },
];

const eventsData = [
  {
    id: 1,
    month: "JUL",
    day: "01",
    year: 2024,
    time: "Mon • 20:00",
    location: "Amsterdam Ziggo Dome",
    tour: "Blue Electric Light Tour",
  },
  {
    id: 2,
    month: "DEC",
    day: "11",
    year: 2024,
    time: "Thu • 19:00",
    location: "Amsterdam Ziggo Dome",
    tour: "Blue Electric Light Tour",
  },
];

export default function EventPage() {
  const [isHeartFilled, setIsHeartFilled] = useState(false);

  const toggleHeart = () => setIsHeartFilled(!isHeartFilled);

  return (
    <section className="bg-dark">
      <NavBar />
      <main className="event-page">
        <div className="event-page__container">
          <div className="event-page__image-wrapper">
            <Image
              className="event-page__image"
              src={Beyonce}
              alt="event image"
            />
            <div className="event-page__image-tags">
              <div className="event-page__match-tag">90% Match</div>
              <div className="event-page__genre-tag">Pop Music</div>
            </div>
          </div>
          <section className="event-page__info-section">
            <div className="event-page__info-section-title">
              <h2>Beyonce</h2>
              <Image
                className="event-page__info-section-icon"
                onClick={toggleHeart}
                src={!isHeartFilled ? HeartIcon : FullHeartIcon}
                alt="Heart icon"
              />
            </div>

            {/* Can be optimised to avoid code repetition, but would first consultate to know how the data is going to be fetched  */}

            {data.map((item) => (
              <Fragment key={item.id}>
                <div className="flex items-start gap-3">
                  <Image src={DateIcon} alt="Date icon" />
                  <div className="event-page__info-section-event-info flex-col -mt-0.5">
                    <span>
                      <span className="font-medium">Start:</span>{" "}
                      {item.startDate} {item.startTime}
                    </span>
                    <span>
                      <span className="font-medium">End:</span> {item.endDate}{" "}
                      {item.endTime}
                    </span>
                  </div>
                </div>
                <div className="event-page__info-section-event-info">
                  <Image src={LocationIcon} alt="Location icon" />
                  <span>{item.location}</span>
                </div>
                <div className="event-page__info-section-event-info">
                  <Image src={TicketIcon} alt="Ticket icon" />
                  <span>{item.price}</span>
                </div>
              </Fragment>
            ))}

            <hr className="event-page__info-section-line" />

            <h4 className="event-page__info-section-description">
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
            ></iframe>
          </section>

          <section className="event-page__draggable-events">
            <div className="event-page__section">
              <div className="event-page__section-title-wrapper">
                <h2 className="event-page__section-title">
                  Other Artist Events{" "}
                </h2>
                <Link
                  className="event-page__section-see-all"
                  href="/event-page"
                >
                  See All
                </Link>
              </div>
            </div>

            <ArtistEvents data={eventsData} location="Netherlands" />
          </section>
        </div>
      </main>

      <section className="event-page__button">
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

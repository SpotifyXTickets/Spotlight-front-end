import "../app/globals.scss";
import "../styles/pages/_artist-page.scss";

import Image from "next/image";

import Beyonce from "@/assets/BeyonceDrag.png";
import HeartIcon from "@/assets/heart.svg";

import NavBar from "@/components/NavBar";
import Button from "@/components/Button";
import Footer from "@/components/Footer";
import EventsSectionDrag from "@/components/EventsSectionDrag";

export default function ArtistPage() {
  return (
    <section className="background">
      <NavBar />
      <main className="artist-page">
        <section>
          <div className="artist-page__image-wrapper">
            <Image
              className="artist-page__image"
              src={Beyonce}
              alt="Artist image"
            />
          </div>
          <div className="artist-page__info">
            <div className="artist-page__title">
              <h2>Beyonce</h2>
              <Image
                className="w-6 cursor-pointer"
                src={HeartIcon}
                alt="Heart icon"
              />
            </div>

            <span>15 november 2023, Wed 19:00 </span>
            <span>Johan Cruijff ArenA, Amsterdam</span>
            <span>From 200€</span>
            <hr className="border-[#222222] my-4" />
            <h4 className="text-xl">About Event</h4>
            <p>
              Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis. Class
              aptent taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos himenaeos. Curabitur tempus urna at turpis condimentum
              lobortis.
            </p>
            <iframe
              className="my-10"
              src="https://open.spotify.com/embed/artist/6vWDO969PvNqNYHIOW5v0m?utm_source=generator&theme=0"
              width="100%"
              height="352"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </div>
          <div className="artist-page__draggable-events">
            <h2 className="artist-page__draggable-events-title">
              You might also like
            </h2>
            <EventsSectionDrag />
          </div>
        </section>
      </main>

      <section className="artist-page__button">
        <Button text="text-[#fbf9f9]" background="bg-[#6e3aff]">
          Buy Tickets
        </Button>
      </section>
      <div className="pb-24">
        <Footer />
      </div>
    </section>
  );
}

import "@/styles/components/_events-section.scss";

import EventCard from "@/components/EventCard";
import Beyonce from "@/assets/beyonce.png";
import TheWeeknd from "@/assets/theweeknd.png";
import ArianaGrande from "@/assets/arianagrande.png";

const data = [
  {
    id: 1,
    artist: "Beyonce",
    artistImage: Beyonce,
    percentage: 90,
    date: "15 November 19:00",
    location: "Johan Cruijff ArenA, Amsterdam",
  },
  {
    id: 2,
    artist: "The Weeknd",
    artistImage: TheWeeknd,
    percentage: 76,
    date: "15 November 19:00",
    location: "Johan Cruijff ArenA, Amsterdam",
  },
  {
    id: 3,
    artist: "Ariana Grande",
    artistImage: ArianaGrande,
    percentage: 50,
    date: "15 November 19:00",
    location: "Johan Cruijff ArenA, Amsterdam",
  },
];

export default function EventsSection(props: { title: string }) {
  return (
    <>
      <section className="events-section">
        {props.title ? (
          <h2 className="events-section__title">{props.title}</h2>
        ) : (
          ""
        )}
        {data.map((item) => (
          <EventCard key={item.id} data={item} />
        ))}
      </section>
    </>
  );
}

import "../styles/pages/_recommendations-selection.scss";

import { EventType } from "@/types/types";
import { GetServerSideProps, NextPage } from "next";
import NavBar from "@/components/NavBar";
import SearchBar from "@/components/SearchBar";
import Categories from "@/components/Categories";
import EventsSection from "@/components/EventsSection";
import Footer from "@/components/Footer";

type PageProps = {
  events: EventType[];
  rockEvents: EventType[];
  danceElectronicEvents: EventType[];
  hipHopRapEvents: EventType[];
  folkEvents: EventType[];
  popEvents: EventType[];
  rnbEvents: EventType[];
};

export const getServerSideProps: GetServerSideProps<PageProps> = async (
  context
) => {
  const props = {
    events: [] as EventType[],
    rockEvents: [] as EventType[],
    danceElectronicEvents: [] as EventType[],
    hipHopRapEvents: [] as EventType[],
    folkEvents: [] as EventType[],
    popEvents: [] as EventType[],
    rnbEvents: [] as EventType[],
  } as PageProps;

  const rockEvents = fetch("http://localhost:8000/events/rock?size=3")
    .then(async (res) => {
      const data = (await res.json()).events as EventType[];
      props.rockEvents = data;
    })
    .catch((err) => {
      console.error(err);
    });

  const danceElectronicEvents = fetch(
    "http://localhost:8000/events/danceelectronic?size=3"
  )
    .then(async (res) => {
      const data = (await res.json()).events as EventType[];
      props.danceElectronicEvents = data;
    })
    .catch((err) => {
      console.error(err);
    });

  const hipHopRapEvents = fetch("http://localhost:8000/events/hiphoprap?size=3")
    .then(async (res) => {
      const data = (await res.json()).events as EventType[];
      props.hipHopRapEvents = data;
    })
    .catch((err) => {
      console.error(err);
    });

  const folkEvents = fetch("http://localhost:8000/events/folk?size=3")
    .then(async (res) => {
      const data = (await res.json()).events as EventType[];
      props.folkEvents = data;
    })
    .catch((err) => {
      console.error(err);
    });

  const popEvents = fetch("http://localhost:8000/events/pop?size=3")
    .then(async (res) => {
      const data = (await res.json()).events as EventType[];
      props.popEvents = data;
    })
    .catch((err) => {
      console.error(err);
    });

  const rnbEvents = fetch("http://localhost:8000/events/rnb?size=3")
    .then(async (res) => {
      const data = (await res.json()).events as EventType[];
      props.rnbEvents = data;
    })
    .catch((err) => {
      console.error(err);
    });

  await rockEvents;
  await danceElectronicEvents;
  await hipHopRapEvents;
  await folkEvents;
  await popEvents;
  await rnbEvents;

  return { props };
};

export const Home: NextPage<PageProps> = (props) => {
  return (
    <section>
      <NavBar />
      <main className="recommendations-selection">
        <h1 className="recommendations-selection__title">Best For You</h1>
        <SearchBar />
        <Categories />
        <EventsSection title="Pop Music" events={props.popEvents} />
        <EventsSection title="R&B Music" events={props.rnbEvents} />
        <EventsSection title="Rock Music" events={props.rockEvents} />
        <EventsSection
          title="Dance & Electronic Music"
          events={props.danceElectronicEvents}
        />
        <EventsSection title="Folk Music" events={props.folkEvents} />
        <EventsSection
          title="Hip Hop & Rap Music"
          events={props.hipHopRapEvents}
        />
      </main>
      <Footer />
    </section>
  );
};

export default Home;

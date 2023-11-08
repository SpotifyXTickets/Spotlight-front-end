import Link from "next/link";
import "../styles/pages/_home-page.scss";

import Navigation from "@/components/Navigation";
import SearchFilters from "@/components/SearchFilters";
import EventCard from "@/components/EventCard";
import { EventType } from "@/types/types";
import { GetServerSideProps, NextPage } from "next";
import { Page } from "@playwright/test";

type PageProps = {
  events: EventType[];
};

export const getServerSideProps: GetServerSideProps<PageProps> = async (
  context
) => {
  const props = { events: [] as EventType[] } as PageProps;
  await fetch("http://localhost:8000/events")
    .then(async (res) => {
      const data = (await res.json()).events as EventType[];
      props.events = data;
    })
    .catch((err) => {
      console.error(err);
    });

  return { props };
};

export const Home: NextPage<PageProps> = (props) => {
  return (
    <>
      <Navigation />
      <main className="home-page mt-32 px-28">
        <h1 className="font-medium">Header</h1>

        <section className="">
          <SearchFilters />
          {/* Repetition going to be replaced my mapping the actual events */}
          {props.events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </section>
        {/* <Link href="/page">link showing route to different page</Link> */}
      </main>
    </>
  );
};

export default Home;

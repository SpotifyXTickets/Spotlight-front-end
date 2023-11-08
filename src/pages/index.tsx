import "../styles/pages/_recommendations-selection.scss";

import EventCard from "@/components/EventCard";
import { EventType } from "@/types/types";
import { GetServerSideProps, NextPage } from "next";
import { Page } from "@playwright/test";
import Header from "@/components/Header";
import NavBar from "@/components/NavBar";
import SearchBar from "@/components/SearchBar";
import Categories from "@/components/Categories";
import EventsSection from "@/components/EventsSection";
import Footer from "@/components/Footer";

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
    <section>
      <NavBar />
      <main className="recommendations-selection">
        <h1 className="recommendations-selection__title">Best For You</h1>
        <SearchBar />
        <Categories />
        <EventsSection title="Pop Music" />
        <EventsSection title="R&B Music" />
      </main>
      <Footer />
    </section>
  );
};

export default Home;

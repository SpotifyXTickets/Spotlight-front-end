import "../styles/pages/_recommendations-selection.scss";

import EventCard from "@/components/EventCard";
import { EventType } from "@/types/types";
import { GetServerSideProps, NextPage } from "next";
import { Page } from "@playwright/test";
import Header from "@/components/Header";
import SearchBar from "@/components/SearchBar";
import Dropdown from "@/components/Dropdown";

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
    <section className="recommendations-selection__wrapper">
      <Header />
      <main className="recommendations-selection">
        <h1 className="h1">Header</h1>
        <div className="search-header">
          <SearchBar />
          <div className="search-header__dropdowns">
            <Dropdown dropdownTitle={"Sort by"} />
            <Dropdown dropdownTitle={"Filters"} />
          </div>
        </div>
        <div className="recommendations-selection__list">
          {props.events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </main>
    </section>
  );
};

export default Home;

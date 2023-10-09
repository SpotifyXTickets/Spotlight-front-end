import Link from "next/link";
import "../styles/pages/_home-page.scss";

import Navigation from "@/components/Navigation";
import SearchFilters from "@/components/SearchFilters";
import EventCard from "@/components/EventCard";

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="home-page mt-32 px-28">
        <h1 className="font-medium">Header</h1>

        <section className="">
          <SearchFilters />
          {/* Repetition going to be replaced my mapping the actual events */}
          <EventCard />
          <EventCard />
          <EventCard />
        </section>
        {/* <Link href="/page">link showing route to different page</Link> */}
      </main>
    </>
  );
}

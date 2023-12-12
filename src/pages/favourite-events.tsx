import "../app/globals.scss";
import "../styles/pages/_recommendations-selection.scss";

import NavBar from "@/components/NavBar";
import EventsSection from "@/components/EventsSection";
import Footer from "@/components/Footer";

export default function FavouriteEvents() {
  return (
    <section className="recommendations-section">
      <NavBar />
      <main className="recommendations-selection">
        <h1 className="text-3xl text-white font-semibold">Favourite events</h1>
        <EventsSection title="" />
        <EventsSection title="" />
      </main>
      <Footer />
    </section>
  );
}

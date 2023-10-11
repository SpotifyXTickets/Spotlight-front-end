import "../styles/pages/_recommendations-selection.scss";

import EventCard from "@/components/EventCard";
import Header from "@/components/Header";
import SearchBar from "@/components/SearchBar";
import Dropdown from "@/components/Dropdown";

export default function Home() {
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
        <div>
          <EventCard />
        </div>
      </main>
    </section>
  );
}

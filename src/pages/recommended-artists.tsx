import "@/app/globals.scss";
import "@/styles/pages/_recommendations-selection.scss";

import NavBar from "@/components/NavBar";
import SearchBar from "@/components/SearchBar";
import Categories from "@/components/Categories";
import ArtistList from "@/components/ArtistList";
import Footer from "@/components/Footer";

export default function RecommendedArtists() {
  return (
    <section className="recommendations-section">
      <NavBar />
      <main className="recommendations-selection">
        <h1 className="text-3xl text-white font-semibold mb-6">
          Recommended Artists
        </h1>
        <SearchBar placeholder="Search by keywords" />
        <Categories />
        <ArtistList />
      </main>
      <Footer />
    </section>
  );
}

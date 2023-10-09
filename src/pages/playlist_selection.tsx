import "../styles/pages/_playlist-selection.scss";
import SearchBar from "@/components/SearchBar";
import Dropdown from "@/components/Dropdown";

export default function Page() {
  return (
    <main className="playlist-selection">
      <h1 className="h1">Header</h1>
      <div className="search-header">
        <SearchBar />
        <div className="search-header__dropdowns">
          <Dropdown dropdownTitle={"Sort by"} />
          <Dropdown dropdownTitle={"Filters"} />
        </div>
      </div>
    </main>
  );
}

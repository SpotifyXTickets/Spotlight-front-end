import SearchBar from "./SearchBar";
import Dropdown from "./Dropdown";

export default function SearchFilters() {
  return (
    <section className="flex justify-between mt-8">
      <SearchBar />

      <div className="flex gap-6">
        <Dropdown dropdownTitle={"Sort by"} />
        <Dropdown dropdownTitle={"Filters"} />
      </div>
    </section>
  );
}

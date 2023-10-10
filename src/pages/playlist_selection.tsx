import "../styles/pages/_playlist-selection.scss";
import SearchBar from "@/components/SearchBar";
import Dropdown from "@/components/Dropdown";
import PlaylistCard from "@/components/PlaylistCard";
import StickyFooter from "@/components/StickyFooter";
import Navigation from "@/components/Navigation";
import Header from "@/components/Header";

let PlaylistLoremIpsumData = [
  {
    id: 1,
    title: "Lorem Ipsum Dolor Sit Amet",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    duration: "3:45",
    artist: "John Doe",
    album: "Lorem Ipsum",
    year: 2021,
  },
  {
    id: 2,
    title: "Sed Do Eiusmod Tempor",
    description:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    duration: "4:20",
    artist: "Jane Smith",
    album: "Dolor Sit Amet",
    year: 2020,
  },
  {
    id: 3,
    title: "Consectetur Adipiscing Elit",
    description:
      "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    duration: "2:30",
    artist: "Bob Johnson",
    album: "Adipiscing Elit",
    year: 2019,
  },
  {
    id: 4,
    title: "Ut Enim Ad Minim Veniam",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    duration: "5:15",
    artist: "Alice Lee",
    album: "Minim Veniam",
    year: 2018,
  },
  {
    id: 5,
    title: "Duis Aute Irure Dolor",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    duration: "3:00",
    artist: "David Kim",
    album: "Irure Dolor",
    year: 2017,
  },
  {
    id: 6,
    title: "Duis Aute Irure Dolor",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    duration: "3:00",
    artist: "David Kim",
    album: "Irure Dolor",
    year: 2017,
  },
  {
    id: 7,
    title: "Duis Aute Irure Dolor",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    duration: "3:00",
    artist: "David Kim",
    album: "Irure Dolor",
    year: 2017,
  },
  {
    id: 8,
    title: "Duis Aute Irure Dolor",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    duration: "3:00",
    artist: "David Kim",
    album: "Irure Dolor",
    year: 2017,
  },
  {
    id: 9,
    title: "Duis Aute Irure Dolor",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    duration: "3:00",
    artist: "David Kim",
    album: "Irure Dolor",
    year: 2017,
  },
  {
    id: 10,
    title: "Duis Aute Irure Dolor",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    duration: "3:00",
    artist: "David Kim",
    album: "Irure Dolor",
    year: 2017,
  },
  {
    id: 11,
    title: "Duis Aute Irure Dolor",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    duration: "3:00",
    artist: "David Kim",
    album: "Irure Dolor",
    year: 2017,
  },
  {
    id: 12,
    title: "Duis Aute Irure Dolor",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    duration: "3:00",
    artist: "David Kim",
    album: "Irure Dolor",
    year: 2017,
  },
  {
    id: 13,
    title: "Duis Aute Irure Dolor",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    duration: "3:00",
    artist: "David Kim",
    album: "Irure Dolor",
    year: 2017,
  },
  {
    id: 14,
    title: "Duis Aute Irure Dolor",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    duration: "3:00",
    artist: "David Kim",
    album: "Irure Dolor",
    year: 2017,
  },
  {
    id: 15,
    title: "Duis Aute Irure Dolor",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    duration: "3:00",
    artist: "David Kim",
    album: "Irure Dolor",
    year: 2017,
  },
];

export default function Page() {
  return (
    <section className="playlist-selection__wrapper">
      <Header />
      <main className="playlist-selection">
        <h1 className="h1">Header</h1>
        <div className="search-header">
          <SearchBar />
          <div className="search-header__dropdowns">
            <Dropdown dropdownTitle={"Sort by"} />
            <Dropdown dropdownTitle={"Filters"} />
          </div>
        </div>
        <div className="playlist-selection__item-list">
          {PlaylistLoremIpsumData.map((item) => (
            <PlaylistCard key={item.id} data={item} />
          ))}
        </div>
      </main>
      <StickyFooter />
    </section>
  );
}

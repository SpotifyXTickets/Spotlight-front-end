import "../styles/pages/_playlist-selection.scss";
import SearchBar from "@/components/SearchBar";
// import Dropdown from "@/components/Dropdown";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "@/providers/UserProvider";
import { verifyJwtToken } from "@/libs/auth";
import { JWTPayload } from "jose";
import Cookies from "universal-cookie";
import { useGetTokenOrRedirect } from "@/hooks/useGetTokenOrRedirect";
import NavBar from "@/components/NavBar";
import PlaylistSection from "@/components/PlaylistSection";
import Button from "@/components/Button";
import Footer from "@/components/Footer";
import Link from "next/link";
import { getApiHost } from "@/libs/getApiHost";

type Playlist = {
  href: string;
  items: Array<PlaylistItem>;
  limit: number;
  next: string;
  offset: number;
  previous: string;
  total: number;
};
type PlaylistItem = {
  collaborative: boolean;
  description: string;
  external_urls: {
    spotify: string;
  };
  href: string;
  id: string;
  images: {
    height: number;
    url: string;
    width: number;
  }[];
  name: string;
  owner: {
    display_name: string;
    external_urls: {
      spotify: string;
    };
    href: string;
    id: string;
    type: string;
    uri: string;
  };
  primary_color: string;
  public: boolean;
  snapshot_id: string;
  tracks: {
    href: string;
    total: number;
  };
  type: string;
  uri: string;
};

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

function LoopSkeletons(Component: any, count: number) {
  let i = 0;
  const components = [];
  while (i < count) {
    components.push(Component);
    i++;
  }
  return (
    <>
      {components.map((Component, index) => (
        <Component key={index} />
      ))}
    </>
  );
}

export default function Page() {
  const { user } = useContext(UserContext);
  const testToken = useGetTokenOrRedirect();
  const [playlist, setPlaylist] = useState<Playlist>();
  const apiHost = getApiHost();
  // const twix_access_token = verifyJwtToken(cookies.get("twix_access_token"));
  console.log(playlist);
  useEffect(() => {
    if (!user) {
      return;
    }
    const cookies = new Cookies();
    const twix_access_token = verifyJwtToken(cookies.get("twix_access_token"));
    // console.log(twix_access_token);
    console.log(cookies);
    const getPlaylists = async (token: Promise<JWTPayload | null>) => {
      const accessToken = ((await token) as { accessToken: string })
        .accessToken;
      fetch(`${apiHost}/playlist`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }).then(async (res) => {
        setPlaylist((await res.json()) as Playlist);
      });
    };

    getPlaylists(twix_access_token);
  }, [user]);

  console.log(user);
  return (
    <section>
      <NavBar />
      <main className="select-playlists">
        <h2 className="select-playlists__header">Select Playlists</h2>
        {/* <p className="select-playlists__info">
          Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit.
        </p> */}
        <SearchBar />
        {playlist ? <PlaylistSection playlist={playlist} /> : <></>}
      </main>
      <section className="select-playlists__buttons">
        <Link className="select-playlists__link" href="/home-page">
          <Button
            text="text-[#6e3aff]"
            background="bg-[#fbf9f9]"
            border="border"
            borderColor="border-[#6e3aff]"
          >
            Skip This Step
          </Button>
        </Link>
        <Link className="select-playlists__link" href="/home-page">
          <Button text="text-[#fbf9f9]" background="bg-[#6e3aff]">
            Get Started
          </Button>
        </Link>
      </section>
      <Footer />
    </section>
  );
}
